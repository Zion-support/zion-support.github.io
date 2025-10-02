import React from 'react';
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

export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
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
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold">
              Revolutionize Your Marketing with 300% ROI Guaranteed
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your advertising campaigns with our breakthrough AI technology. Achieve 95% targeting accuracy, 
              60% cost reduction, and 300% ROI with intelligent automation and predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Start Free Consultation
              </a>
              <a 
                href="#services" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Our Services
              </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-d5ef
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services">
        <ServicesAdvertisingPromo />
      </section>

      {/* AI Advertising Banner */}
      <section>
        <AIAdvertisingBanner />
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-purple-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}