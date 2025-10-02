import React from 'react';
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Globe,
  Smartphone,
  Database,
  MessageSquare,
  Cpu,
  Network,
  Eye,
  Mail,
  Calendar,
  ShoppingCart,
  Mic,
  FileText
} from 'lucide-react';

export default function ServicesAdvertisingPage() {
  const title = 'Professional Technology Services — Zion Tech Group';
  const description = 'Comprehensive AI, micro SaaS, and IT services with transparent pricing, fast delivery, and guaranteed ROI. Contact us today for a free consultation.';

  const featuredServices = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'blue',
      count: '15+ Services',
      startingPrice: '$500/month',
      popularServices: [
        'AI-Powered Customer Service',
        'Predictive Analytics Platform',
        'Computer Vision Solutions',
        'AI Process Automation',
        'Healthcare Diagnostics AI',
        'Financial Risk Assessment'
      ],
      benefits: [
        'Automate 70% of repetitive tasks',
        'Improve decision-making by 85%',
        'Reduce operational costs by 40%',
        '24/7 intelligent automation'
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      icon: Code,
      color: 'green',
      count: '18+ Applications',
      startingPrice: '$199/month',
      popularServices: [
        'Cloud Cost Optimizer',
        'AI Content Localization',
        'Blockchain Invoice Tracker',
        'IoT Device Management',
        'Quantum-Safe Password Manager',
        'Sustainable Business Analytics'
      ],
      benefits: [
        'Launch 50% faster than competitors',
        '50% lower development costs',
        'Production-ready in 1-6 weeks',
        'Enterprise-grade security'
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'purple',
      count: '15+ Solutions',
      startingPrice: '$500/project',
      popularServices: [
        'Cloud Migration & Architecture',
        'DevOps & CI/CD Pipeline',
        'Quantum Computing Integration',
        '5G Network Implementation',
        'Zero Trust Security Architecture',
        'Digital Transformation Consulting'
      ],
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        '99.9% uptime guarantee',
        '2-3x faster delivery',
        'Comprehensive support & maintenance'
      ]
    }
  ];

  const pricingComparison = [
    {
      service: 'AI Customer Service Bot',
      ourPrice: '$1,200 - $8,000/month',
      marketPrice: '$2,000 - $15,000/month',
      savings: '40% savings',
      delivery: '2-4 weeks'
    },
    {
      service: 'Cloud Migration',
      ourPrice: '$5,000 - $50,000/project',
      marketPrice: '$10,000 - $100,000/project',
      savings: '50% savings',
      delivery: '2-8 weeks'
    },
    {
      service: 'Micro SaaS Development',
      ourPrice: '$2,500 - $12,000/month',
      marketPrice: '$5,000 - $15,000/month',
      savings: '50% savings',
      delivery: '3-6 weeks'
    },
    {
      service: 'DevOps Pipeline Setup',
      ourPrice: '$3,000 - $25,000/project',
      marketPrice: '$8,000 - $40,000/project',
      savings: '62% savings',
      delivery: '2-6 weeks'
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Projects Completed', icon: Target },
    { metric: '340%', label: 'Average ROI', icon: DollarSign },
    { metric: '98%', label: 'Client Satisfaction', icon: Star },
    { metric: '4 weeks', label: 'Average Delivery', icon: Clock },
    { metric: '50%', label: 'Cost Savings', icon: BarChart3 },
    { metric: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: '30-60 minute discovery call to understand your needs and goals',
      duration: 'Same day',
      icon: MessageSquare
    },
    {
      step: 2,
      title: 'Custom Proposal',
      description: 'Detailed project plan with transparent pricing and timeline',
      duration: '24-48 hours',
      icon: FileText
    },
    {
      step: 3,
      title: 'Fast Development',
      description: 'Professional execution with regular updates and minimal disruption',
      duration: '1-20 weeks',
      icon: Code
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Smooth deployment with ongoing support and optimization',
      duration: 'Ongoing',
      icon: Zap
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
                <span className="text-blue-300 font-bold text-sm tracking-wider uppercase">
                  🚀 Professional Technology Services
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Transform Your Business with Our Technology Solutions
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-semibold">
                AI • Micro SaaS • IT Services with Guaranteed Results
              </p>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                From AI automation to micro SaaS development and enterprise IT solutions, 
                we deliver cutting-edge technology services with transparent pricing, 
                fast delivery, and proven ROI. Save 40-60% compared to market rates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  📞 Call Now: {contactInfo.phone}
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  ✉️ Get Free Quote
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">500+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">340%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">50%</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Technology Service Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI, micro SaaS, and IT services. 
                All solutions include transparent pricing, fast delivery, and guaranteed results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.category}</h3>
                      <p className="text-gray-600">{service.count}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Starting from</div>
                    <div className="text-2xl font-bold text-green-600 mb-4">{service.startingPrice}</div>
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Services:</h4>
                    <ul className="space-y-2">
                      {service.popularServices.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-green-700">✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <a href={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`} className={`w-full bg-${service.color}-600 text-white py-3 px-6 rounded-xl hover:bg-${service.color}-700 transition-colors font-semibold flex items-center justify-center`}>
                    Explore {service.category}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing Comparison</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our competitive pricing compares to market rates. 
                We deliver the same quality at 40-60% lower costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingComparison.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-4">{item.service}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">Our Pricing:</div>
                      <div className="font-bold text-green-600">{item.ourPrice}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Market Rate:</div>
                      <div className="text-gray-700 line-through">{item.marketPrice}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">You Save:</div>
                      <div className="font-bold text-blue-600">{item.savings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Delivery:</div>
                      <div className="font-medium text-purple-600">{item.delivery}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results & Success Metrics</h2>
              <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Simple 4-Step Process</h2>
              <p className="text-xl text-gray-600">From consultation to launch in record time</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="text-sm text-blue-600 font-medium">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600">We deliver exceptional value and results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees. Clear pricing with market comparisons and guaranteed ROI. Save 40-60% compared to competitors.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Most projects delivered 2-3x faster than industry standards with quality assurance and regular updates.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">98% client satisfaction with documented ROI improvements, case studies, and ongoing support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Get a free consultation and discover how our technology solutions can drive your success. 
              Most projects start with a 30-60 minute call and a detailed proposal within 48 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us Now</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white text-lg font-semibold">
                  {contactInfo.phone}
                </a>
                <p className="text-blue-200 text-sm mt-2">Available 9 AM - 6 PM EST</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white text-lg font-semibold">
                  {contactInfo.email}
                </a>
                <p className="text-blue-200 text-sm mt-2">Response within 2 hours</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-blue-100 text-sm">
                  {contactInfo.address}
                </p>
                <p className="text-blue-200 text-sm mt-2">By appointment only</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/50 transform hover:-translate-y-1"
              >
                📞 Schedule Free Consultation
              </a>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                🌐 Visit Our Website
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}