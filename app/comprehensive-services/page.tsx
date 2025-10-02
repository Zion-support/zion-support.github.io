import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Code, Cloud, Shield, Network, Server, BarChart3, Settings, 
  Zap, Monitor, Search, MessageSquare, CheckCircle, ArrowRight, 
  DollarSign, Clock, Users, Globe, Smartphone, Database, 
  Lock, TrendingUp, Target, Lightbulb, Rocket, Cpu, 
  Wifi, Eye, Headphones, FileText, Calendar, Mail,
  Phone, MapPin, ExternalLink, Star, Award
} from 'lucide-react';

export const metadata = {
  title: 'Comprehensive Services — Zion Tech Group',
  description: 'Complete catalog of micro SaaS, AI, and IT services. Transform your business with our comprehensive suite of innovative solutions.',
  keywords: 'comprehensive services, micro SaaS, AI services, IT services, business solutions, technology services',
};

export default function ComprehensiveServices() {
  const phoneHref = "tel:+13024640950";
  const emailHref = "mailto:kleber@ziontechgroup.com";
  const websiteHref = "https://ziontechgroup.com";

  const serviceCategories = [
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      icon: Code,
      color: 'orange',
      description: 'Targeted business applications with rapid deployment and immediate ROI',
      count: 18,
      services: [
        {
          name: 'AI Meeting Intelligence Platform',
          description: 'Real-time meeting analysis with sentiment tracking and action item extraction',
          price: '$299 - $1,499/month',
          features: ['Real-time transcription', 'Sentiment analysis', 'Action item extraction', 'CRM integration'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Smart Document Processing Suite',
          description: 'AI-powered document analysis with 99.8% accuracy',
          price: '$199 - $999/month',
          features: ['OCR processing', 'Data extraction', 'Workflow automation', 'Compliance monitoring'],
          popular: false,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Customer Experience Analytics Engine',
          description: 'Multi-channel customer journey tracking and personalization',
          price: '$399 - $2,499/month',
          features: ['Journey mapping', 'Predictive analytics', 'Personalization', 'A/B testing'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'AI Content Marketing Suite',
          description: 'Automated content creation and distribution across all channels',
          price: '$149 - $799/month',
          features: ['Content generation', 'SEO optimization', 'Multi-platform distribution', 'Performance tracking'],
          popular: false,
          link: '/services/ai-content-generation'
        },
        {
          name: 'Smart Inventory Optimization Platform',
          description: 'AI-driven inventory management with demand forecasting',
          price: '$249 - $1,299/month',
          features: ['Demand forecasting', 'Automated reordering', 'Cost optimization', 'Supplier analytics'],
          popular: false,
          link: '/services/ai-inventory-management'
        },
        {
          name: 'Healthcare Appointment Intelligence',
          description: 'Smart scheduling system with patient preferences and telehealth integration',
          price: '$399 - $1,999/month',
          features: ['Appointment optimization', 'Patient matching', 'Telehealth integration', 'HIPAA compliance'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Financial Technology Solutions',
          description: 'Comprehensive fintech micro SaaS solutions including payment processing, invoicing, and financial analytics',
          price: '$199 - $4,999/month',
          features: ['AI-Powered Payment Processing', 'Smart Invoice Management', 'Expense Tracking & Analytics', 'Cryptocurrency Trading Platform'],
          popular: true,
          link: '/services/financial-technology-solutions'
        },
        {
          name: 'Healthcare Technology Solutions',
          description: 'HIPAA-compliant healthcare micro SaaS solutions including telemedicine, patient management, and medical billing',
          price: '$199 - $4,999/month',
          features: ['AI-Powered Telemedicine Platform', 'Smart Patient Management System', 'Medical Billing & Revenue Cycle', 'Healthcare Analytics Dashboard'],
          popular: true,
          link: '/services/healthcare-technology-solutions'
        },
        {
          name: 'Education Technology Solutions',
          description: 'FERPA-compliant EdTech micro SaaS solutions including LMS, student analytics, and virtual classrooms',
          price: '$99 - $3,499/month',
          features: ['AI-Powered Learning Management System', 'Student Analytics & Performance Platform', 'Virtual Classroom & Video Platform', 'AI Course Creation & Content Generator'],
          popular: true,
          link: '/services/education-technology-solutions'
        },
        {
          name: 'E-commerce Technology Solutions',
          description: 'Comprehensive e-commerce micro SaaS solutions including inventory management, customer service, and analytics',
          price: '$99 - $2,999/month',
          features: ['AI-Powered Inventory Management', 'Smart Customer Service Automation', 'E-commerce Analytics & Insights', 'Multi-Channel E-commerce Platform'],
          popular: true,
          link: '/services/ecommerce-technology-solutions'
        },
        {
          name: 'Human Resources Solutions',
          description: 'Comprehensive HR micro SaaS solutions including recruitment, performance management, and payroll',
          price: '$99 - $2,999/month',
          features: ['AI-Powered Recruitment Platform', 'Performance Management Suite', 'Automated Payroll Processing', 'Employee Analytics & Insights'],
          popular: true,
          link: '/services/human-resources-solutions'
        },
        {
          name: 'Real Estate Technology Solutions',
          description: 'Comprehensive real estate micro SaaS solutions including property management, lead generation, and virtual tours',
          price: '$99 - $2,999/month',
          features: ['AI-Powered Property Management', 'Smart Lead Generation & CRM', 'Virtual Property Tours & 3D Visualization', 'Real Estate Analytics & Market Intelligence'],
          popular: true,
          link: '/services/real-estate-technology-solutions'
        },
        {
          name: 'Logistics & Supply Chain Solutions',
          description: 'Comprehensive logistics micro SaaS solutions including route optimization, tracking, and warehouse management',
          price: '$149 - $3,499/month',
          features: ['AI-Powered Route Optimization', 'Real-Time Tracking & Visibility', 'Smart Warehouse Management', 'Supply Chain Analytics & Intelligence'],
          popular: true,
          link: '/services/logistics-supply-chain-solutions'
        },
        {
          name: 'Marketing Automation Solutions',
          description: 'Comprehensive marketing automation micro SaaS solutions including email campaigns, social media, and lead nurturing',
          price: '$99 - $3,499/month',
          features: ['AI-Powered Email Marketing', 'Social Media Automation Suite', 'Lead Nurturing & Scoring Platform', 'Marketing Analytics & Attribution'],
          popular: true,
          link: '/services/marketing-automation-solutions'
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Comprehensive cybersecurity micro SaaS solutions including threat detection, vulnerability scanning, and compliance',
          price: '$99 - $9,999/month',
          features: ['AI-Powered Threat Detection', 'Vulnerability Assessment & Management', 'Security Compliance & Audit Platform', 'Security Analytics & SIEM Platform'],
          popular: true,
          link: '/services/cybersecurity-solutions'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'blue',
      description: 'Cutting-edge artificial intelligence solutions for enterprise transformation',
      count: 24,
      services: [
        {
          name: 'Autonomous Business Process Orchestration',
          description: 'Self-managing workflows that adapt and optimize processes in real-time',
          price: '$2,999 - $12,999/month',
          features: ['Self-healing automation', 'Dynamic optimization', 'Cross-system integration', 'Predictive prevention'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Advanced Fraud Detection & Prevention',
          description: 'Real-time fraud detection using deep learning and behavioral analytics',
          price: '$1,999 - $8,999/month',
          features: ['Real-time monitoring', 'Behavioral analysis', 'Risk scoring', 'Automated response'],
          popular: false,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Predictive Maintenance Intelligence',
          description: 'AI-powered equipment monitoring for manufacturing and IoT',
          price: '$3,499 - $15,999/month',
          features: ['IoT sensor analysis', 'Predictive modeling', 'Maintenance scheduling', 'Cost optimization'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Intelligent Customer Support Automation',
          description: 'Advanced AI customer service with natural language understanding',
          price: '$799 - $3,999/month',
          features: ['Multi-language NLP', 'Context management', 'Human handoff', 'Knowledge base learning'],
          popular: false,
          link: '/services/ai-virtual-assistant'
        },
        {
          name: 'AI-Powered Legal Document Analysis',
          description: 'Automated contract review, risk assessment, and compliance monitoring',
          price: '$2,499 - $9,999/month',
          features: ['Contract analysis', 'Risk identification', 'Compliance monitoring', 'Legal research'],
          popular: false,
          link: '/services/legal-ai-platform'
        },
        {
          name: 'Smart Energy Management System',
          description: 'AI-driven energy optimization for buildings, factories, and smart cities',
          price: '$1,499 - $6,999/month',
          features: ['Energy monitoring', 'Demand modeling', 'Optimization recommendations', 'Smart grid integration'],
          popular: false,
          link: '/services/innovative-solutions-2025'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Cloud,
      color: 'green',
      description: 'Enterprise-grade infrastructure and security solutions',
      count: 16,
      services: [
        {
          name: 'Zero-Trust Security Architecture',
          description: 'Comprehensive security framework with continuous verification',
          price: '$4,999 - $24,999/month',
          features: ['Identity management', 'Micro-segmentation', 'Continuous monitoring', 'Compliance automation'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Cloud-Native Application Platform',
          description: 'Full-stack development platform with automated CI/CD',
          price: '$6,999 - $29,999/month',
          features: ['Kubernetes orchestration', 'CI/CD pipelines', 'Auto-scaling', 'Service mesh'],
          popular: true,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Data Lake & Analytics Platform',
          description: 'Unified data platform with real-time processing and ML integration',
          price: '$3,999 - $19,999/month',
          features: ['Data ingestion', 'Real-time analytics', 'ML deployment', 'Self-service BI'],
          popular: false,
          link: '/services/innovative-solutions-2025'
        },
        {
          name: 'Edge Computing Infrastructure',
          description: 'Distributed computing platform for low-latency applications',
          price: '$2,999 - $14,999/month',
          features: ['Edge node management', 'Low-latency processing', 'IoT integration', 'Offline capability'],
          popular: false,
          link: '/services/ai-edge-computing'
        },
        {
          name: 'DevSecOps Automation Platform',
          description: 'Integrated development, security, and operations with automated compliance',
          price: '$5,499 - $22,999/month',
          features: ['Security scanning', 'Compliance monitoring', 'Infrastructure as code', 'Policy enforcement'],
          popular: true,
          link: '/services/ai-devsecops-automation'
        },
        {
          name: 'Multi-Cloud Management Suite',
          description: 'Unified management platform for AWS, Azure, and GCP with cost optimization',
          price: '$2,499 - $12,999/month',
          features: ['Multi-cloud management', 'Cost optimization', 'Unified monitoring', 'Disaster recovery'],
          popular: false,
          link: '/services/innovative-solutions-2025'
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare AI Platform',
      description: 'AI-powered healthcare solutions with patient diagnosis assistance',
      price: '$2,499/month',
      industry: 'Healthcare',
      icon: 'Users'
    },
    {
      name: 'FinTech AI Platform',
      description: 'Advanced financial AI with fraud detection and risk assessment',
      price: '$3,999/month',
      industry: 'Financial Services',
      icon: 'DollarSign'
    },
    {
      name: 'Manufacturing AI Platform',
      description: 'Predictive maintenance and quality control for manufacturing',
      price: '$2,799/month',
      industry: 'Manufacturing',
      icon: 'Settings'
    },
    {
      name: 'Retail AI Platform',
      description: 'Personalized shopping experiences and inventory management',
      price: '$1,799/month',
      industry: 'Retail',
      icon: 'ShoppingBag'
    },
    {
      name: 'EdTech AI Suite',
      description: 'Personalized learning paths and automated grading',
      price: '$1,499/month',
      industry: 'Education',
      icon: 'GraduationCap'
    },
    {
      name: 'Legal AI Platform',
      description: 'Document analysis, contract review, and legal research automation',
      price: '$2,299/month',
      industry: 'Legal',
      icon: 'Scale'
    }
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={`${websiteHref}/comprehensive-services`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Award className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg tracking-wider uppercase">
                  Comprehensive Services
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight">
                Complete Technology Solutions
              </h1>
              
              <p className="text-2xl md:text-3xl text-blue-100 mb-8 font-semibold max-w-3xl mx-auto">
                58+ innovative services across micro SaaS, AI, and IT solutions. Transform your business with proven technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href={phoneHref}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call: +1 302 464 0950
                </a>
                <a 
                  href={emailHref}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <IconComponent className={`w-8 h-8 text-${category.color}-600`} />
                    <span className={`text-${category.color}-600 font-bold text-lg uppercase tracking-wider`}>
                      {category.title}
                    </span>
                    <span className={`bg-${category.color}-100 text-${category.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                      {category.count} Services
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative">
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                            Popular
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">4.9/5</span>
                        </div>
                      </div>
                      
                      <Link
                        href={service.link}
                        className={`w-full bg-gradient-to-r from-${category.color}-500 to-${category.color === 'orange' ? 'red' : category.color === 'blue' ? 'indigo' : 'teal'}-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Industry Solutions */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored solutions for specific industries with proven results and specialized expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => {
                const IconComponent = solution.icon as any;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{solution.industry}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {solution.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{solution.price}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.8/5</span>
                      </div>
                    </div>
                    
                    <a
                      href={emailHref}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                With 58+ services across micro SaaS, AI, and IT solutions, we have the perfect solution for your business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <a href={phoneHref} className="text-blue-300 hover:text-blue-200 font-medium">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a href={emailHref} className="text-blue-300 hover:text-blue-200 font-medium">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Website</h4>
                      <a href={websiteHref} className="text-blue-300 hover:text-blue-200 font-medium">
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={phoneHref}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={emailHref}
                    className="border-2 border-blue-600 text-blue-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>

              {/* Service Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Service Portfolio</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Micro SaaS Solutions</span>
                    <span className="text-orange-400 font-bold text-xl">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">AI Services</span>
                    <span className="text-blue-400 font-bold text-xl">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">IT Services</span>
                    <span className="text-green-400 font-bold text-xl">16</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total Services</span>
                      <span className="text-white font-bold text-2xl">58+</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-200">
                    <strong>Special Offer:</strong> Get 30% off your first 3 months when you sign up for any annual plan. 
                    Includes free setup, training, and 24/7 support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}