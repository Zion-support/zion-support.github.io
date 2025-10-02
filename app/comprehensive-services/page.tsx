import React from 'react';
import { Metadata } from 'next';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Globe,
  Lock,
  Database,
  Cpu,
  Target,
  Rocket,
  MessageSquare,
  FileText,
  Users,
  Settings,
  Monitor,
  Search,
  Network,
  Server,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprehensive Services Catalog | Zion Tech Group - AI, Micro SaaS & IT Solutions',
  description: 'Complete catalog of AI services, micro SaaS solutions, and IT consulting services. Transform your business with cutting-edge technology solutions.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation, machine learning',
};

export default function ComprehensiveServicesPage() {
  const serviceCategories = [
    {
      title: 'AI-Powered Micro SaaS Solutions',
      description: 'Innovative software-as-a-service applications powered by artificial intelligence',
      icon: Brain,
      color: 'blue',
      services: [
        {
          name: 'AI-Powered Email Subject Line Optimizer',
          description: 'Generate high-converting email subject lines using AI analysis of industry performance data and A/B testing.',
          price: '$49 - $299/month',
          delivery: '1 week',
          features: [
            'AI-generated subject lines for 40+ industries',
            'A/B testing with statistical significance',
            'Open rate prediction and optimization',
            'Integration with major email platforms',
            'Performance analytics and recommendations',
            'Compliance with CAN-SPAM and GDPR'
          ],
          benefits: [
            'Average 23% increase in open rates',
            'Reduced email marketing costs',
            'Improved campaign performance',
            'Data-driven optimization'
          ],
          marketSize: '$7.5B email marketing market',
          useCases: ['E-commerce', 'SaaS companies', 'Marketing agencies', 'Newsletters']
        },
        {
          name: 'Smart Meeting Analytics Platform',
          description: 'AI-powered meeting insights, productivity tracking, and automated follow-up generation for remote teams.',
          price: '$99 - $499/month',
          delivery: '2 weeks',
          features: [
            'Real-time meeting transcription and analysis',
            'Action item extraction and assignment',
            'Meeting effectiveness scoring',
            'Calendar optimization suggestions',
            'Integration with Zoom, Teams, Google Meet',
            'Team productivity dashboards'
          ],
          benefits: [
            '35% reduction in meeting time waste',
            'Improved team productivity',
            'Better meeting outcomes',
            'Automated follow-up generation'
          ],
          marketSize: '$4.2B meeting software market',
          useCases: ['Remote teams', 'Consulting firms', 'Sales organizations', 'Project management']
        },
        {
          name: 'Healthcare Appointment Intelligence',
          description: 'AI-driven appointment scheduling with patient preference learning, no-show prediction, and optimization.',
          price: '$199 - $999/month',
          delivery: '3 weeks',
          features: [
            'Smart scheduling with patient preferences',
            'No-show prediction and prevention',
            'Wait time optimization',
            'HIPAA-compliant patient communication',
            'Revenue optimization through scheduling',
            'Integration with major EHR systems'
          ],
          benefits: [
            '28% reduction in no-shows',
            '15% revenue increase',
            'Improved patient satisfaction',
            'Optimized resource utilization'
          ],
          marketSize: '$3.8B healthcare scheduling market',
          useCases: ['Hospitals', 'Clinics', 'Dental practices', 'Specialty care']
        },
        {
          name: 'Smart Inventory Forecasting',
          description: 'AI-powered demand forecasting, stock optimization, and automated reordering for e-commerce businesses.',
          price: '$299 - $1,499/month',
          delivery: '3 weeks',
          features: [
            'Demand forecasting with 95% accuracy',
            'Automated reorder point calculations',
            'Seasonal trend analysis',
            'Supplier performance tracking',
            'Integration with major e-commerce platforms',
            'Cost optimization recommendations'
          ],
          benefits: [
            '25% reduction in stockouts',
            '20% cost savings',
            'Improved cash flow',
            'Better supplier relationships'
          ],
          marketSize: '$2.1B inventory management market',
          useCases: ['E-commerce', 'Retail', 'Manufacturing', 'Distribution']
        }
      ]
    },
    {
      title: 'Advanced AI Services',
      description: 'Cutting-edge artificial intelligence solutions for enterprise applications',
      icon: Cpu,
      color: 'purple',
      services: [
        {
          name: 'AI-Powered Customer Service Automation',
          description: 'Intelligent chatbots with natural language understanding, sentiment analysis, and human handoff capabilities.',
          price: '$1,500 - $7,500/month',
          delivery: '3-4 weeks',
          features: [
            'Multi-channel chatbot deployment (web, mobile, social)',
            'Natural language processing with intent recognition',
            'Sentiment analysis and escalation triggers',
            'Integration with CRM and ticketing systems',
            '24/7 multilingual customer support',
            'Performance analytics and optimization'
          ],
          benefits: [
            '70% reduction in support costs',
            '95% customer satisfaction',
            '24/7 availability',
            'Scalable support operations'
          ],
          marketSize: '$8.6B conversational AI market',
          useCases: ['E-commerce', 'SaaS companies', 'Financial services', 'Healthcare']
        },
        {
          name: 'Predictive Analytics Platform',
          description: 'Advanced machine learning models for business forecasting, risk assessment, and decision optimization.',
          price: '$2,500 - $12,000/month',
          delivery: '4-6 weeks',
          features: [
            'Custom ML model development and training',
            'Real-time prediction and scoring APIs',
            'Automated model retraining and optimization',
            'Business intelligence dashboards and reports',
            'Integration with existing data systems',
            'A/B testing and performance monitoring'
          ],
          benefits: [
            '25% improvement in business decision accuracy',
            'Reduced operational risks',
            'Optimized resource allocation',
            'Competitive advantage through insights'
          ],
          marketSize: '$15.2B predictive analytics market',
          useCases: ['Financial services', 'Retail', 'Manufacturing', 'Healthcare']
        },
        {
          name: 'AI-Powered Document Processing',
          description: 'Intelligent document analysis, data extraction, and automated workflow processing.',
          price: '$1,800 - $8,000/month',
          delivery: '3-5 weeks',
          features: [
            'OCR with 99%+ accuracy for various document types',
            'Automated data extraction and validation',
            'Document classification and routing',
            'Contract analysis and risk assessment',
            'Compliance monitoring and reporting',
            'Workflow automation and approval processes'
          ],
          benefits: [
            '90% reduction in manual processing time',
            '99.5% accuracy in data extraction',
            'Automated compliance reporting',
            'Improved operational efficiency'
          ],
          marketSize: '$12.4B document management market',
          useCases: ['Legal firms', 'Insurance companies', 'Healthcare providers', 'Financial services']
        },
        {
          name: 'Computer Vision Solutions',
          description: 'Advanced image and video analysis for quality control, security, and automation.',
          price: '$2,000 - $10,000/month',
          delivery: '4-6 weeks',
          features: [
            'Object detection and recognition systems',
            'Quality control and defect detection',
            'Facial recognition and access control',
            'Video analytics and monitoring',
            'Custom model training for specific use cases',
            'Real-time processing and alert systems'
          ],
          benefits: [
            '40% improvement in quality control accuracy',
            'Reduced manual inspection costs',
            'Enhanced security measures',
            'Automated quality assurance'
          ],
          marketSize: '$19.1B computer vision market',
          useCases: ['Manufacturing', 'Retail', 'Security', 'Healthcare']
        }
      ]
    },
    {
      title: 'Comprehensive IT Services',
      description: 'Full-stack IT solutions including cloud migration, DevOps, and cybersecurity',
      icon: Cloud,
      color: 'green',
      services: [
        {
          name: 'Cloud Migration & Optimization',
          description: 'Complete cloud migration services with cost optimization and performance tuning.',
          price: '$5,000 - $25,000/month',
          delivery: '4-8 weeks',
          features: [
            'AWS, Azure, and GCP migration planning',
            'Application modernization and containerization',
            'Cost optimization and rightsizing',
            'Security and compliance implementation',
            'Performance monitoring and optimization',
            'Disaster recovery and backup solutions'
          ],
          benefits: [
            '30% cost reduction',
            '50% performance improvement',
            'Enhanced scalability',
            'Improved reliability'
          ],
          marketSize: '$445B cloud computing market',
          useCases: ['Enterprise migration', 'Startup scaling', 'Legacy modernization', 'Multi-cloud strategies']
        },
        {
          name: 'DevOps & CI/CD Automation',
          description: 'End-to-end DevOps implementation with automated pipelines and infrastructure as code.',
          price: '$3,500 - $15,000/month',
          delivery: '3-6 weeks',
          features: [
            'CI/CD pipeline design and implementation',
            'Infrastructure as Code (IaC) with Terraform',
            'Container orchestration with Kubernetes',
            'Monitoring and logging solutions',
            'Security scanning and compliance automation',
            'Team training and best practices'
          ],
          benefits: [
            '60% faster deployment',
            '40% fewer bugs',
            'Improved team productivity',
            'Reduced operational overhead'
          ],
          marketSize: '$7.8B DevOps market',
          useCases: ['Software development', 'Digital transformation', 'Agile teams', 'Cloud-native applications']
        },
        {
          name: 'Cybersecurity & Compliance',
          description: 'Comprehensive security solutions including threat detection, compliance, and risk management.',
          price: '$2,500 - $12,000/month',
          delivery: '4-8 weeks',
          features: [
            'Security assessment and penetration testing',
            'SOC 2, HIPAA, GDPR compliance implementation',
            'Threat detection and incident response',
            'Security awareness training programs',
            'Vulnerability management and patching',
            '24/7 security monitoring and support'
          ],
          benefits: [
            '90% reduction in security incidents',
            'Regulatory compliance assurance',
            'Enhanced data protection',
            'Reduced security risks'
          ],
          marketSize: '$173B cybersecurity market',
          useCases: ['Financial services', 'Healthcare', 'E-commerce', 'SaaS companies']
        },
        {
          name: 'Data Analytics & Business Intelligence',
          description: 'Advanced data analytics solutions with real-time dashboards and predictive insights.',
          price: '$2,000 - $10,000/month',
          delivery: '3-6 weeks',
          features: [
            'Data warehouse design and implementation',
            'ETL/ELT pipeline development',
            'Real-time analytics and reporting',
            'Machine learning model deployment',
            'Data visualization and dashboards',
            'Data governance and quality management'
          ],
          benefits: [
            '35% improvement in data-driven decisions',
            'Real-time business insights',
            'Improved operational efficiency',
            'Competitive intelligence'
          ],
          marketSize: '$33.3B business intelligence market',
          useCases: ['Business intelligence', 'Data-driven marketing', 'Operational analytics', 'Financial reporting']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Services Catalog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our complete range of AI services, micro SaaS solutions, and IT consulting services. 
              Transform your business with cutting-edge technology and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-${category.color}-100`}>
                    <category.icon className={`w-12 h-12 text-${category.color}-600`} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Market Size</h5>
                        <p className="text-sm text-gray-600">{service.marketSize}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Use Cases</h5>
                        <p className="text-sm text-gray-600">{service.useCases.join(', ')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href="/contact" 
                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                      >
                        Get Quote
                      </a>
                      <a 
                        href="tel:+13024640950" 
                        className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and get a customized solution that delivers real results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-200 hover:text-white">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-200 hover:text-white">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-blue-200">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}