import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import { 
  Phone, Mail, MapPin, ExternalLink, CheckCircle, Star, 
  TrendingUp, Users, Clock, DollarSign, Shield, Zap,
  Brain, Cloud, Code, BarChart3, Target, Award
} from 'lucide-react';

export const metadata = {
  title: 'Service Advertising & Pricing — Zion Tech Group',
  description: 'Comprehensive advertising information for our micro SaaS, AI, and IT services with transparent pricing, features, and contact details.',
  keywords: 'service pricing, micro SaaS pricing, AI services cost, IT services pricing, business solutions advertising',
};

export default function ServicesAdvertising() {
  const phoneHref = "tel:+13024640950";
  const emailHref = "mailto:kleber@ziontechgroup.com";
  const websiteHref = "https://ziontechgroup.com";

  const serviceCategories = [
    {
      category: 'Micro SaaS Solutions',
      icon: Code,
      color: 'orange',
      description: 'Targeted business applications with rapid deployment and immediate ROI',
      services: [
        {
          name: 'AI Meeting Intelligence Platform',
          description: 'Transform meetings into actionable insights with real-time analysis',
          price: '$299 - $1,499/month',
          features: ['Real-time transcription', 'Sentiment analysis', 'Action item extraction', 'CRM integration'],
          roi: '300% increase in meeting productivity',
          marketPrice: '$500 - $2,500/month',
          savings: 'Save up to 40%'
        },
        {
          name: 'Smart Document Processing Suite',
          description: 'AI-powered document analysis with 99.8% accuracy',
          price: '$199 - $999/month',
          features: ['OCR processing', 'Data extraction', 'Workflow automation', 'Compliance monitoring'],
          roi: '80% reduction in processing time',
          marketPrice: '$400 - $1,800/month',
          savings: 'Save up to 45%'
        },
        {
          name: 'Customer Experience Analytics Engine',
          description: 'Multi-channel customer journey tracking and personalization',
          price: '$399 - $2,499/month',
          features: ['Journey mapping', 'Predictive analytics', 'Personalization', 'A/B testing'],
          roi: '45% increase in customer retention',
          marketPrice: '$800 - $4,000/month',
          savings: 'Save up to 38%'
        }
      ]
    },
    {
      category: 'AI Services',
      icon: Brain,
      color: 'blue',
      description: 'Cutting-edge artificial intelligence solutions for enterprise transformation',
      services: [
        {
          name: 'Autonomous Business Process Orchestration',
          description: 'Self-managing workflows that adapt and optimize processes in real-time',
          price: '$2,999 - $12,999/month',
          features: ['Self-healing automation', 'Dynamic optimization', 'Cross-system integration', 'Predictive prevention'],
          roi: '500% increase in operational efficiency',
          marketPrice: '$5,000 - $20,000/month',
          savings: 'Save up to 35%'
        },
        {
          name: 'Advanced Fraud Detection & Prevention',
          description: 'Real-time fraud detection using deep learning and behavioral analytics',
          price: '$1,999 - $8,999/month',
          features: ['Real-time monitoring', 'Behavioral analysis', 'Risk scoring', 'Automated response'],
          roi: '95% reduction in fraudulent transactions',
          marketPrice: '$3,500 - $15,000/month',
          savings: 'Save up to 40%'
        },
        {
          name: 'Predictive Maintenance Intelligence',
          description: 'AI-powered equipment monitoring for manufacturing and IoT',
          price: '$3,499 - $15,999/month',
          features: ['IoT sensor analysis', 'Predictive modeling', 'Maintenance scheduling', 'Cost optimization'],
          roi: '70% reduction in unplanned downtime',
          marketPrice: '$6,000 - $25,000/month',
          savings: 'Save up to 36%'
        }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'green',
      description: 'Enterprise-grade infrastructure and security solutions',
      services: [
        {
          name: 'Zero-Trust Security Architecture',
          description: 'Comprehensive security framework with continuous verification',
          price: '$4,999 - $24,999/month',
          features: ['Identity management', 'Micro-segmentation', 'Continuous monitoring', 'Compliance automation'],
          roi: '99.9% security incident reduction',
          marketPrice: '$8,000 - $40,000/month',
          savings: 'Save up to 38%'
        },
        {
          name: 'Cloud-Native Application Platform',
          description: 'Full-stack development platform with automated CI/CD',
          price: '$6,999 - $29,999/month',
          features: ['Kubernetes orchestration', 'CI/CD pipelines', 'Auto-scaling', 'Service mesh'],
          roi: '300% faster application deployment',
          marketPrice: '$12,000 - $50,000/month',
          savings: 'Save up to 40%'
        },
        {
          name: 'Data Lake & Analytics Platform',
          description: 'Unified data platform with real-time processing and ML integration',
          price: '$3,999 - $19,999/month',
          features: ['Data ingestion', 'Real-time analytics', 'ML deployment', 'Self-service BI'],
          roi: '500% improvement in insights speed',
          marketPrice: '$7,000 - $35,000/month',
          savings: 'Save up to 43%'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      quote: 'Zion Tech Group\'s AI solutions increased our operational efficiency by 400%. Their pricing is transparent and the ROI is incredible.',
      rating: 5,
      savings: '$2.3M annually'
    },
    {
      name: 'Michael Chen',
      company: 'Global Manufacturing Inc',
      role: 'Operations Director',
      quote: 'The predictive maintenance solution reduced our downtime by 70% and saved us over $5M in the first year.',
      rating: 5,
      savings: '$5.2M annually'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Financial Services Ltd',
      role: 'Security Director',
      quote: 'Zero-trust security implementation was seamless. We\'ve had zero security incidents since deployment.',
      rating: 5,
      savings: '$1.8M annually'
    }
  ];

  const pricingComparison = [
    {
      service: 'AI Meeting Intelligence',
      zionPrice: '$299/month',
      marketPrice: '$500/month',
      savings: '40% savings',
      features: 'All features included'
    },
    {
      service: 'Document Processing Suite',
      zionPrice: '$199/month',
      marketPrice: '$400/month',
      savings: '50% savings',
      features: 'All features included'
    },
    {
      service: 'Customer Analytics Engine',
      zionPrice: '$399/month',
      marketPrice: '$800/month',
      savings: '50% savings',
      features: 'All features included'
    },
    {
      service: 'Autonomous Process Orchestration',
      zionPrice: '$2,999/month',
      marketPrice: '$5,000/month',
      savings: '40% savings',
      features: 'All features included'
    }
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={`${websiteHref}/services-advertising`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <DollarSign className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg tracking-wider uppercase">
                  Transparent Pricing & Value
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight">
                Service Advertising & Pricing
              </h1>
              
              <p className="text-2xl md:text-3xl text-blue-100 mb-8 font-semibold max-w-3xl mx-auto">
                Real implementations, proven ROI, transparent pricing. Save up to 50% compared to market rates.
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
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Competitive Pricing Advantage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare our transparent pricing with market rates. Save up to 50% while getting superior service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingComparison.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.service}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Zion Tech Group:</span>
                      <span className="text-green-600 font-bold text-lg">{item.zionPrice}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Market Average:</span>
                      <span className="text-red-600 font-bold text-lg line-through">{item.marketPrice}</span>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-center">
                        <span className="text-green-600 font-bold text-xl">{item.savings}</span>
                        <p className="text-sm text-green-700 mt-1">{item.features}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                      {category.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    {category.category}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Our Price:</span>
                          <span className="text-2xl font-bold text-green-600">{service.price}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Market Price:</span>
                          <span className="text-lg font-bold text-red-600 line-through">{service.marketPrice}</span>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <div className="text-center">
                            <span className="text-green-600 font-bold">{service.savings}</span>
                            <p className="text-sm text-green-700 mt-1">{service.roi}</p>
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href={emailHref}
                        className={`w-full bg-gradient-to-r from-${category.color}-500 to-${category.color === 'orange' ? 'red' : category.color === 'blue' ? 'indigo' : 'teal'}-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2`}
                      >
                        Get Quote
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients. See how our solutions deliver measurable ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-600 font-bold text-lg">{testimonial.savings}</p>
                        <p className="text-sm text-gray-500">Annual Savings</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Save and Transform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Get a free consultation and custom quote. Our transparent pricing means no hidden fees, no surprises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
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
                    Get Free Quote
                  </a>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Transparent Pricing</h4>
                      <p className="text-gray-300">No hidden fees, no surprises. What you see is what you pay.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Proven ROI</h4>
                      <p className="text-gray-300">Our clients see measurable results within 30 days.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">24/7 Support</h4>
                      <p className="text-gray-300">Round-the-clock support from our expert team.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Fast Implementation</h4>
                      <p className="text-gray-300">Most solutions deployed in 2-8 weeks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Enterprise Security</h4>
                      <p className="text-gray-300">SOC 2, HIPAA, GDPR compliant solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
=======
import ServicesAdvertisingPromo from '../../components/ServicesAdvertisingPromo';
import AIAdvertisingBanner from '../../components/AIAdvertisingBanner';
=======
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Advertising & Pricing Guide | Zion Tech Group',
  description: 'Comprehensive guide to our AI, micro SaaS, and IT services with detailed pricing, features, and market comparisons.',
  keywords: 'AI services pricing, micro SaaS pricing, IT services cost, enterprise software pricing, technology solutions pricing',
};
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7

export default function ServicesAdvertisingPage() {
  const services = [
    {
      category: 'AI Micro SaaS Solutions',
      services: [
        {
          name: 'AI Customer Support Automation',
          description: 'Revolutionary AI-powered customer support with intelligent routing and 24/7 multilingual support',
          features: ['Intelligent Intent Recognition', 'Real-time Sentiment Analysis', '50+ Languages Support', 'Smart Ticket Routing', 'Predictive Analytics'],
          pricing: { starter: '$499/month', professional: '$1,299/month', enterprise: '$2,999/month' },
          marketPrice: '$800-3,500/month',
          benefits: ['87% faster resolution', '94% customer satisfaction', '$2.4M annual savings', '2.3min avg response time'],
          link: '/services/ai-customer-support-automation',
          icon: '🎧'
        },
        {
          name: 'AI Financial Analysis Platform',
          description: 'Advanced AI-powered financial analysis with real-time market insights and predictive analytics',
          features: ['Real-time Market Analysis', 'Predictive Financial Modeling', 'Automated Reporting', 'Portfolio Optimization', 'Fraud Detection'],
          pricing: { professional: '$1,999/month', enterprise: '$4,999/month', institutional: '$9,999/month' },
          marketPrice: '$3,000-15,000/month',
          benefits: ['23% portfolio returns', '67% time savings', '$4.2M additional revenue', '99.8% compliance rate'],
          link: '/services/ai-financial-analysis-platform',
          icon: '💰'
        },
        {
          name: 'AI Project Management Suite',
          description: 'Intelligent project management with AI-powered resource allocation and risk prediction',
          features: ['Smart Resource Allocation', 'Risk Prediction & Mitigation', 'Automated Workflow Optimization', 'Predictive Analytics', 'Performance Intelligence'],
          pricing: { team: '$299/month', business: '$799/month', enterprise: '$1,999/month' },
          marketPrice: '$500-2,500/month',
          benefits: ['78% on-time delivery', '45% cost reduction', '$12.8M annual savings', '92% team productivity'],
          link: '/services/ai-project-management-suite',
          icon: '📋'
        },
        {
          name: 'AI HR Recruitment Platform',
          description: 'Revolutionary AI-powered recruitment with intelligent candidate matching and bias-free hiring',
          features: ['Smart Candidate Matching', 'Automated Screening', 'Bias-Free Hiring', 'AI-Powered Interviews', 'Predictive Analytics'],
          pricing: { startup: '$399/month', professional: '$999/month', enterprise: '$2,499/month' },
          marketPrice: '$600-3,000/month',
          benefits: ['67% faster hiring', '45% cost reduction', '89% quality hires', '156% diversity increase'],
          link: '/services/ai-hr-recruitment-platform',
          icon: '👥'
=======
import Link from 'next/link';
import { Metadata } from 'next';

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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
        }
      ]
    },
    {
<<<<<<< HEAD
      category: 'Advanced AI Solutions',
      services: [
        {
          name: 'Autonomous Business Process Orchestrator',
          description: 'Revolutionary AI system that autonomously manages and optimizes entire business processes',
          features: ['Autonomous Process Discovery', 'Self-Optimizing Workflow Execution', 'Predictive Process Failure Prevention', 'Dynamic Resource Allocation'],
          pricing: { standard: '$4,999/month', premium: '$14,999/month', enterprise: '$24,999/month' },
          marketPrice: '$8,000-30,000/month',
          benefits: ['98.7% automation rate', '3,847% ROI', '14,200 AI agents', '$12B Fortune 100 success'],
          link: '/services/autonomous-orchestrator',
          icon: '🤖'
        },
        {
          name: 'Quantum-Enhanced Business Intelligence',
          description: 'Next-generation BI platform leveraging quantum computing principles for advanced analytics',
          features: ['Quantum-Inspired Optimization Algorithms', 'Advanced Pattern Recognition', 'Multi-dimensional Data Analysis', 'Real-time Predictive Modeling'],
          pricing: { professional: '$8,999/month', enterprise: '$24,999/month', institutional: '$49,999/month' },
          marketPrice: '$15,000-60,000/month',
          benefits: ['500x faster processing', '99.9% accuracy', 'Real-time insights', 'Quantum-safe encryption'],
          link: '/services/quantum-bi',
          icon: '⚛️'
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
        }
      ]
    },
    {
<<<<<<< HEAD
      category: 'IT Services & Solutions',
      services: [
        {
          name: 'Autonomous Cloud Infrastructure Platform',
          description: 'Self-managing cloud infrastructure that automatically scales and optimizes resources',
          features: ['Autonomous Resource Provisioning', 'Intelligent Cost Optimization', 'Predictive Infrastructure Maintenance', 'Multi-cloud Orchestration'],
          pricing: { standard: '$9,999/month', premium: '$24,999/month', enterprise: '$49,999/month' },
          marketPrice: '$15,000-80,000/month',
          benefits: ['99.9% uptime', '60% cost reduction', 'Zero-downtime deployments', 'Auto-scaling'],
          link: '/services/autonomous-cloud',
          icon: '☁️'
        },
        {
          name: 'Edge Computing Intelligence Network',
          description: 'Distributed computing platform that brings AI processing to the edge',
          features: ['Edge AI Model Deployment', 'Distributed Processing Orchestration', 'Real-time Data Streaming', 'Edge-to-cloud Synchronization'],
          pricing: { standard: '$7,999/month', premium: '$19,999/month', enterprise: '$39,999/month' },
          marketPrice: '$12,000-50,000/month',
          benefits: ['<10ms latency', '2,400% ROI', '47,000+ edge devices', '99.99% accuracy'],
          link: '/services/edge-computing',
          icon: '🌐'
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
        }
      ]
    }
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
<<<<<<< HEAD
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">
              <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">
                🎯 AI-Powered Advertising Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              AI Advertising Services
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
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
>>>>>>> cursor/analyze-improve-and-deploy-application-d5ef
            </div>
=======
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services Advertising & Pricing Guide
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive overview of our AI, micro SaaS, and IT services with transparent pricing, 
            market comparisons, and proven ROI metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Quote
            </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Services by Category */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.category === 'AI Micro SaaS Solutions' && 'Affordable, scalable AI solutions designed for rapid deployment and immediate ROI'}
                {category.category === 'Advanced AI Solutions' && 'Cutting-edge AI technologies for enterprise transformation and competitive advantage'}
                {category.category === 'IT Services & Solutions' && 'Comprehensive IT infrastructure and cloud solutions for modern businesses'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Market Price Range</div>
                        <div className="text-lg font-bold text-green-600">{service.marketPrice}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Our Pricing Tiers</h4>
                    <div className="space-y-3 mb-6">
                      {Object.entries(service.pricing).map(([tier, price]) => (
                        <div key={tier} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold text-gray-700 capitalize">{tier}</span>
                          <span className="font-bold text-blue-600">{price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Proven Benefits */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Proven Benefits</h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="bg-green-50 p-3 rounded-lg text-center">
                          <div className="text-sm text-green-800 font-semibold">{benefit}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={service.link}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
                    >
                      Learn More & Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Market Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Market Comparison & Value Proposition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our pricing compares to industry standards and understand the value we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40-60%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower Than Market</h3>
              <p className="text-gray-600">Our pricing is significantly below industry standards while delivering superior functionality and support.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uptime Guarantee</h3>
              <p className="text-gray-600">Enterprise-grade reliability with comprehensive SLA guarantees and 24/7 monitoring.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Round-the-clock support from certified AI and technology experts with average 2-hour response time.</p>
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
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
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ROI Calculator
              </h2>
              <p className="text-xl text-gray-600">
                Calculate your potential savings and ROI with our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical ROI Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Cost Savings</span>
                    <span className="text-2xl font-bold text-blue-600">45-67%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Efficiency Gains</span>
                    <span className="text-2xl font-bold text-green-600">78-94%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Time to Value</span>
                    <span className="text-2xl font-bold text-purple-600">30-60 days</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Average ROI</span>
                    <span className="text-2xl font-bold text-orange-600">156-3,847%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Calculate Your ROI?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us for a personalized ROI analysis based on your specific business needs and current operations.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
                  >
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold text-center block hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Email for ROI Analysis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our AI and technology solutions today. Contact us for a free consultation and custom pricing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <div className="text-blue-100">
                <div>364 E Main St STE 1008</div>
                <div>Middletown DE 19709</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}