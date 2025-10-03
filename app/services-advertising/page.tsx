import React from 'react';
import { Link } from 'react-router-dom';
// Metadata handled by React Helmet

export const metadata: Metadata = {
  title: 'Services Advertising & Pricing | Zion Tech Group',
  description: 'Comprehensive overview of all Zion Tech Group services with competitive pricing, market comparisons, and ROI benefits. Contact us for custom quotes.',
  keywords: 'AI services pricing, micro SaaS pricing, IT services cost, technology consulting rates, enterprise solutions pricing',
};

export default function ServicesAdvertisingPage() {
  const serviceCategories = [
    {
      title: 'AI Services & Solutions',
      icon: '🧠',
      color: 'blue',
      services: [
        {
          name: 'Machine Learning Model Development',
          description: 'Custom ML models with advanced algorithms and real-time processing',
          ourPrice: '$5,000 - $50,000/project',
          marketPrice: '$3,000 - $30,000/project',
          savings: 'Up to 40% savings',
          roi: '300% average ROI',
          features: ['Custom Algorithm Development', 'Real-time Model Training', 'Predictive Analytics', 'Model Optimization'],
          benefits: ['40% improvement in decision accuracy', '60% reduction in manual analysis time', 'Real-time insights'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Machine Learning Development Quote'
        },
        {
          name: 'Natural Language Processing Suite',
          description: 'Advanced NLP solutions for text analysis and automated content processing',
          ourPrice: '$3,000 - $25,000/project',
          marketPrice: '$2,000 - $20,000/project',
          savings: 'Up to 25% savings',
          roi: '250% average ROI',
          features: ['Sentiment Analysis', 'Text Summarization', 'Language Translation', 'Chatbot Development'],
          benefits: ['90% accuracy in sentiment analysis', '80% reduction in manual text processing', 'Multi-language support'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=NLP Suite Quote'
        },
        {
          name: 'Computer Vision & Image Recognition',
          description: 'Advanced computer vision solutions for object detection and image analysis',
          ourPrice: '$4,000 - $35,000/project',
          marketPrice: '$2,500 - $25,000/project',
          savings: 'Up to 40% savings',
          roi: '280% average ROI',
          features: ['Object Detection', 'Facial Recognition', 'Image Enhancement', 'Visual Inspection'],
          benefits: ['95% accuracy in object detection', 'Real-time processing', 'Custom model training'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Computer Vision Quote'
        }
        ,
        {
          name: 'Enterprise RAG Platform (Retrieval-Augmented Generation)',
          description: 'Production-grade RAG architecture with evaluation, observability, and guardrails for enterprise search & assistants',
          ourPrice: '$8,000 - $85,000/project',
          marketPrice: '$10,000 - $120,000/project',
          savings: 'Up to 30% savings',
          roi: '3-6 months payback',
          features: ['Domain Adapters & Vector DB', 'Grounded Answers w/ Citations', 'Safety Guardrails', 'Eval Harness & Observability'],
          benefits: ['Reduce search time by 60%', 'Improve answer accuracy by 35-55%', 'Lower support costs by 25%+'],
          contactLink: 'https://ziontechgroup.com/services/ai-services/enterprise-rag-platform'
        },
        {
          name: 'Agentic Sales Assistant',
          description: 'Autonomous multi-step agent that qualifies leads, drafts outreach, and books meetings integrated with your CRM',
          ourPrice: '$3,500 - $25,000 setup + $499 - $2,999/month',
          marketPrice: '$5,000 - $40,000 setup + $699 - $4,999/month',
          savings: 'Up to 25% savings',
          roi: '10x average pipeline lift',
          features: ['Multi-Agent Workflows', 'CRM Integration', 'Compliance Safe-Mode', 'A/B Messaging'],
          benefits: ['40% faster lead qualification', '25% more meetings', '35% reply-rate improvement'],
          contactLink: 'https://ziontechgroup.com/services/ai-services/agentic-sales-assistant'
        },
        {
          name: 'AI Time-Series Forecasting Suite',
          description: 'Demand and financial forecasting with probabilistic models, holidays/events, and anomaly detection',
          ourPrice: '$6,000 - $45,000/project',
          marketPrice: '$8,000 - $65,000/project',
          savings: '20-30% savings',
          roi: '2-5 months payback',
          features: ['Hierarchical Forecasts', 'Cold-Start Handling', 'Backtesting & MAPE/SMAPE', 'Alerting & What-If'],
          benefits: ['15-30% inventory reduction', '3-7% margin improvement', 'Lower stockouts'],
          contactLink: 'https://ziontechgroup.com/services/ai-financial-forecasting-suite'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: '🚀',
      color: 'green',
      services: [
        {
          name: 'AI-Powered Content Creation Suite',
          description: 'Revolutionary content generation platform with advanced AI capabilities',
          ourPrice: '$199 - $1,299/month',
          marketPrice: '$150 - $800/month',
          savings: 'Competitive pricing',
          roi: '400% average ROI',
          features: ['AI-Generated Content', 'Social Media Automation', 'SEO Optimization', 'Multi-Language Support'],
          benefits: ['75% reduction in content creation time', '300% increase in content output', '40% improvement in SEO rankings'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Content Creation Suite Quote'
        },
        {
          name: 'Smart Inventory Management Platform',
          description: 'Intelligent inventory optimization with predictive analytics and automated reordering',
          ourPrice: '$399 - $2,499/month',
          marketPrice: '$200 - $1,500/month',
          savings: 'Competitive pricing',
          roi: '350% average ROI',
          features: ['Predictive Demand Forecasting', 'Automated Reordering', 'Multi-Channel Sync', 'Real-time Monitoring'],
          benefits: ['25% reduction in stockouts', '30% decrease in excess inventory', '20% improvement in cash flow'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Inventory Management Quote'
        },
        {
          name: 'Automated Customer Support AI',
          description: 'Advanced AI chatbot system with natural language processing and seamless human handoff',
          ourPrice: '$299 - $1,899/month',
          marketPrice: '$100 - $1,200/month',
          savings: 'Competitive pricing',
          roi: '320% average ROI',
          features: ['Natural Language Understanding', 'Multi-Channel Support', 'Sentiment Analysis', 'Knowledge Base Updates'],
          benefits: ['80% reduction in support tickets', '24/7 customer availability', '60% faster response times'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Customer Support AI Quote'
        }
        ,
        {
          name: 'AI SEO Auditor & Brief Generator',
          description: 'On-page SEO diagnostics with AI content briefs, internal link maps, and structured data fixes',
          ourPrice: '$49 - $299/month',
          marketPrice: '$29 - $499/month',
          savings: 'Competitive pricing',
          roi: '200-400% average ROI',
          features: ['Topical Maps', 'Entity Coverage', 'Schema.org Suggestions', 'Briefs via API'],
          benefits: ['+20-60% organic traffic', 'Faster content production', 'Reduced agency spend'],
          contactLink: 'https://ziontechgroup.com/services/ai-content-optimization-platform'
        },
        {
          name: 'Social Proof & Review Widget Pro',
          description: 'Lightweight social proof widgets that boost conversions with verified reviews and live counters',
          ourPrice: '$19 - $99/month',
          marketPrice: '$9 - $199/month',
          savings: 'Competitive pricing',
          roi: '120-300% conversion lift potential',
          features: ['Trust Badges', 'A/B Testing', 'Platform Integrations', 'Fraud Controls'],
          benefits: ['+5-18% checkout conversion', 'Reduced bounce rate', 'Higher AOV'],
          contactLink: 'https://ziontechgroup.com/services/advanced-micro-saas-solutions'
        },
        {
          name: 'Compliance Policy Generator (SOC2/ISO/NIST)',
          description: 'Automated policy drafts aligned to SOC2, ISO 27001, and NIST with versioning & evidence maps',
          ourPrice: '$79 - $399/month',
          marketPrice: '$99 - $799/month',
          savings: 'Up to 40% savings',
          roi: 'Faster audits, fewer consultant hours',
          features: ['Policy Library', 'Gap Analyzer', 'Evidence Matrix', 'Reviewer Workflow'],
          benefits: ['Cut audit prep by 50%', 'Standardize policies', 'Lower compliance costs'],
          contactLink: 'https://ziontechgroup.com/services/it-services/soc2-readiness'
        },
        {
          name: 'AI Experimentation & A/B Testing Optimizer',
          description: 'Experiment design assistant with Bayesian analysis, guardrail metrics, and sequential testing',
          ourPrice: '$59 - $349/month',
          marketPrice: '$79 - $499/month',
          savings: 'Competitive pricing',
          roi: '3-10% revenue lift typical',
          features: ['Bayesian Engine', 'Peeking-Safe Stats', 'Guardrails', 'Segment Insights'],
          benefits: ['Ship winning variants faster', 'Avoid false positives', 'Improve UX KPIs'],
          contactLink: 'https://ziontechgroup.com/services/ai-workflow-automation-platform'
        }
      ]
    },
    {
      title: 'IT Services & Solutions',
      icon: '💻',
      color: 'purple',
      services: [
        {
          name: 'Cloud Migration & Management',
          description: 'Seamless cloud migration services with ongoing management and optimization',
          ourPrice: '$5,000 - $75,000/project',
          marketPrice: '$3,000 - $50,000/project',
          savings: 'Up to 33% savings',
          roi: '280% average ROI',
          features: ['Multi-Cloud Strategy', 'Automated Migration', 'Cost Optimization', 'Security Setup'],
          benefits: ['40% reduction in infrastructure costs', '99.9% uptime guarantee', 'Scalable infrastructure'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cloud Migration Quote'
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Complete DevOps transformation with automated pipelines and deployment strategies',
          ourPrice: '$3,000 - $40,000/project',
          marketPrice: '$2,000 - $30,000/project',
          savings: 'Up to 33% savings',
          roi: '320% average ROI',
          features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Alerting'],
          benefits: ['80% faster deployment cycles', '90% reduction in deployment errors', 'Automated testing'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=DevOps Implementation Quote'
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Comprehensive cybersecurity services including threat assessment and security monitoring',
          ourPrice: '$2,500 - $50,000/project',
          marketPrice: '$1,500 - $35,000/project',
          savings: 'Up to 43% savings',
          roi: '290% average ROI',
          features: ['Security Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
          benefits: ['99.9% threat detection accuracy', '24/7 security monitoring', 'Compliance automation'],
          contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cybersecurity Solutions Quote'
        }
        ,
        {
          name: 'FinOps Managed Service',
          description: 'Continuous cloud cost optimization with rightsizing, commitment planning, and anomaly response',
          ourPrice: '$2,500 - $15,000/month',
          marketPrice: '$3,500 - $25,000/month',
          savings: 'Up to 35% savings on infra',
          roi: 'Immediate savings on cloud spend',
          features: ['RI/SP Management', 'K8s Cost Allocation', 'Anomaly Detection', 'Showback/Chargeback'],
          benefits: ['10-35% cloud savings', 'Governed usage', 'Fewer surprise bills'],
          contactLink: 'https://ziontechgroup.com/services/it-services/finops-managed-service'
        },
        {
          name: 'Data Platform Modernization',
          description: 'Migrate legacy ETL/warehouses to modern lakehouse with streaming and governance',
          ourPrice: '$25,000 - $250,000/project',
          marketPrice: '$40,000 - $400,000/project',
          savings: 'Up to 30% savings',
          roi: 'Months to value with phased delivery',
          features: ['Lakehouse Architecture', 'dbt/ELT Migration', 'Streaming Ingestion', 'Data Contracts'],
          benefits: ['Faster analytics', 'Lower compute costs', 'Better data quality'],
          contactLink: 'https://ziontechgroup.com/services/it-services/data-platform-modernization'
        },
        {
          name: 'SOC 2 Readiness & Automation',
          description: 'Readiness assessment, control implementation, and automated evidence collection with auditor handoff',
          ourPrice: '$8,000 - $65,000/project',
          marketPrice: '$12,000 - $95,000/project',
          savings: 'Up to 25% savings',
          roi: 'Pass audits faster',
          features: ['Gap Analysis', 'Control Mapping', 'Ticket/Evidence Automation', 'Auditor Pack'],
          benefits: ['Reduce audit cycle by 30-50%', 'Improved security posture', 'Lower risk'],
          contactLink: 'https://ziontechgroup.com/services/it-services/soc2-readiness'
        },
        {
          name: 'Cloud Migration Factory',
          description: 'Standardized, low-risk app migration program with landing zones and IaC blueprints',
          ourPrice: '$15,000 - $300,000/project',
          marketPrice: '$20,000 - $450,000/project',
          savings: 'Up to 25% savings',
          roi: 'Reduced time-to-cloud',
          features: ['Landing Zones', 'Pipelines & Golden Paths', 'IaC Modules', 'Cutover Playbooks'],
          benefits: ['Fewer rollbacks', 'Predictable timelines', 'Hardened baselines'],
          contactLink: 'https://ziontechgroup.com/services/it-services/cloud-migration'
        }
      ]
    }
  ];

  const marketComparison = [
    { metric: 'Average Project Cost', ourValue: '$15,000', marketValue: '$25,000', savings: '40%' },
    { metric: 'Implementation Time', ourValue: '4-8 weeks', marketValue: '8-16 weeks', savings: '50%' },
    { metric: 'Success Rate', ourValue: '98%', marketValue: '85%', improvement: '15%' },
    { metric: 'Customer Satisfaction', ourValue: '4.9/5', marketValue: '4.2/5', improvement: '17%' },
    { metric: 'ROI Timeline', ourValue: '3-6 months', marketValue: '6-12 months', improvement: '50%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Services Advertising & Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Comprehensive overview of all Zion Tech Group services with competitive pricing, market comparisons, and proven ROI benefits. 
              Get transparent pricing and maximize your technology investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                ✉️ Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Market Comparison */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {marketComparison.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold mb-2">{item.ourValue}</div>
                <div className="text-sm text-blue-100 mb-1">{item.metric}</div>
                <div className="text-xs text-gray-300 mb-2">Market: {item.marketValue}</div>
                <div className="text-green-300 font-semibold">
                  {item.savings ? `Save ${item.savings}` : `+${item.improvement}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">{category.icon}</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional {category.title.toLowerCase()} with competitive pricing and proven results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>

                    {/* Pricing Comparison */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Our Pricing:</span>
                        <span className="font-bold text-green-600 text-lg">{service.ourPrice}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Market Average:</span>
                        <span className="text-sm text-gray-600">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Savings:</span>
                        <span className="text-sm font-semibold text-blue-600">{service.savings}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500">Average ROI:</span>
                        <span className="text-sm font-semibold text-purple-600">{service.roi}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Proven Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-blue-500 mr-2">📈</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="border-t pt-4">
                <a 
                href={service.contactLink}
                className={`w-full bg-${category.color}-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-${category.color}-700 transition-colors block`}
                aria-label={`Request custom quote for ${service.name}`}
              >
                        Get Custom Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.3B</div>
              <h3 className="text-xl font-semibold mb-2">Total Cost Savings</h3>
              <p className="text-gray-300">Generated across all client implementations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <h3 className="text-xl font-semibold mb-2">Projects Delivered</h3>
              <p className="text-gray-300">Successful implementations worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
              <p className="text-gray-300">Projects delivered on time and within budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today for a personalized consultation and custom quote tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                +1 302 464 0950
              </a>
              <p className="text-gray-600 mt-2">Available 24/7 for urgent inquiries</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold text-lg hover:text-green-700">
                kleber@ziontechgroup.com
              </a>
              <p className="text-gray-600 mt-2">Response within 2 hours</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <div className="text-purple-600 font-semibold">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </div>
              <p className="text-gray-600 mt-2">Schedule an in-person meeting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading provider of AI services, micro SaaS solutions, and IT consulting with competitive pricing and proven results.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link href="/services/ai-services-comprehensive" className="block text-gray-300 hover:text-blue-400">AI Services</Link>
                <Link href="/services/advanced-micro-saas-solutions" className="block text-gray-300 hover:text-green-400">Micro SaaS</Link>
                <Link href="/services/it-services-comprehensive" className="block text-gray-300 hover:text-purple-400">IT Services</Link>
                <Link href="/services" className="block text-gray-300 hover:text-blue-400">All Services</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-blue-400">About Us</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-blue-400">Contact</Link>
                <Link href="/case-studies" className="block text-gray-300 hover:text-blue-400">Case Studies</Link>
                <Link href="/blog" className="block text-gray-300 hover:text-blue-400">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
            <Link href="https://ziontechgroup.com" className="hover:text-white ml-1">ziontechgroup.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}