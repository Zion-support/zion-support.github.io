import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  DollarSign, CheckCircle, Star, Award, TrendingUp, 
  Phone, Mail, MapPin, ExternalLink, ArrowRight,
  Brain, Code, Cloud, Shield, Zap, Target,
  Users, Globe, Clock, BarChart3, Settings
} from 'lucide-react';

export const metadata = {
  title: 'Services & Pricing — Zion Tech Group | Transparent Pricing for AI, IT & Micro SaaS',
  description: 'Comprehensive pricing for micro SaaS, AI services, and IT solutions. Transparent costs, flexible plans, and guaranteed ROI for enterprise clients.',
  keywords: 'pricing, micro SaaS pricing, AI services cost, IT solutions pricing, enterprise software costs, transparent pricing',
};

export default function ServicesAdvertising() {
  const phoneHref = "tel:+13024640950";
  const emailHref = "mailto:kleber@ziontechgroup.com";
  const websiteHref = "https://ziontechgroup.com";

  const pricingTiers = [
    {
      name: 'Micro SaaS Solutions',
      icon: Code,
      color: 'orange',
      description: 'Targeted business applications with rapid deployment and immediate ROI',
      services: [
        {
          name: 'AI Customer Sentiment Analytics',
          price: '$299 - $1,499/month',
          features: ['Real-time sentiment monitoring', 'Predictive churn analysis', 'Automated response recommendations'],
          roi: '35% increase in customer satisfaction'
        },
        {
          name: 'Smart Inventory Optimization',
          price: '$249 - $1,299/month',
          features: ['AI demand forecasting', 'Automated reordering', 'Cost optimization'],
          roi: '30% reduction in inventory costs'
        },
        {
          name: 'AI Content Marketing Suite',
          price: '$149 - $799/month',
          features: ['Automated content creation', 'SEO optimization', 'Multi-platform distribution'],
          roi: '300% increase in content output'
        },
        {
          name: 'Healthcare Appointment Intelligence',
          price: '$399 - $1,999/month',
          features: ['Smart scheduling', 'Provider optimization', 'Telehealth integration'],
          roi: '40% reduction in no-show rates'
        }
      ]
    },
    {
      name: 'AI Services',
      icon: Brain,
      color: 'blue',
      description: 'Cutting-edge artificial intelligence solutions for enterprise transformation',
      services: [
        {
          name: 'Autonomous Business Process Orchestration',
          price: '$2,999 - $12,999/month',
          features: ['Self-healing automation', 'Dynamic optimization', 'Cross-system integration'],
          roi: '60% reduction in process execution time'
        },
        {
          name: 'Advanced Fraud Detection',
          price: '$1,999 - $8,999/month',
          features: ['Real-time monitoring', 'Behavioral analysis', 'Automated response'],
          roi: '95% fraud prevention rate'
        },
        {
          name: 'Predictive Maintenance Intelligence',
          price: '$3,499 - $15,999/month',
          features: ['IoT sensor analysis', 'Predictive modeling', 'Cost optimization'],
          roi: '50% reduction in unplanned downtime'
        },
        {
          name: 'Quantum-Enhanced Neural Networks',
          price: '$15,000 - $75,000/month',
          features: ['Quantum computing integration', 'Exponential speed improvements', 'Breakthrough capabilities'],
          roi: 'Exponential processing power gains'
        }
      ]
    },
    {
      name: 'IT Services',
      icon: Cloud,
      color: 'green',
      description: 'Enterprise-grade infrastructure and security solutions',
      services: [
        {
          name: 'Zero-Trust Security Architecture',
          price: '$4,999 - $24,999/month',
          features: ['Identity management', 'Network segmentation', 'Continuous monitoring'],
          roi: '90% reduction in security breaches'
        },
        {
          name: 'Cloud Migration & DevOps',
          price: '$6,000 - $28,000/month',
          features: ['Seamless migration', 'CI/CD automation', 'Infrastructure as Code'],
          roi: '80% reduction in deployment time'
        },
        {
          name: 'Platform Engineering for Kubernetes',
          price: '$6,000 - $28,000/month',
          features: ['Developer platform', 'Golden paths', 'Multi-tenant clusters'],
          roi: '50% increase in developer productivity'
        },
        {
          name: 'Quantum-Ready Cloud Architecture',
          price: '$8,000 - $35,000/month',
          features: ['Future-proof infrastructure', 'Quantum-resistant encryption', 'Hybrid computing'],
          roi: 'Future-proof competitive advantage'
        }
      ]
    }
  ];

  const marketComparisons = [
    {
      service: 'AI Customer Analytics',
      ourPrice: '$299 - $1,499/month',
      marketPrice: '$500 - $3,000/month',
      savings: '40-50%',
      advantage: 'More features, better accuracy'
    },
    {
      service: 'Cloud Migration',
      ourPrice: '$6,000 - $28,000/month',
      marketPrice: '$10,000 - $50,000/month',
      savings: '40%',
      advantage: 'Faster delivery, zero downtime'
    },
    {
      service: 'AI Fraud Detection',
      ourPrice: '$1,999 - $8,999/month',
      marketPrice: '$3,000 - $15,000/month',
      savings: '33%',
      advantage: 'Higher accuracy, real-time processing'
    },
    {
      service: 'DevOps Automation',
      ourPrice: '$6,000 - $28,000/month',
      marketPrice: '$8,000 - $40,000/month',
      savings: '25%',
      advantage: 'Complete automation, better monitoring'
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime for all our services with SLA-backed compensation'
    },
    {
      icon: TrendingUp,
      title: 'ROI Guarantee',
      description: 'If you don\'t see measurable ROI within 90 days, we\'ll refund your investment'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Most services delivered within 2-8 weeks with milestone-based progress tracking'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with dedicated account managers'
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transparent Pricing & Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get enterprise-grade AI, IT, and micro SaaS solutions at competitive prices with guaranteed ROI and transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href={phoneHref} 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call: +1 302 464 0950
                </a>
                <a 
                  href={emailHref} 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-blue-200">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Visit us at: <a href={websiteHref} className="underline hover:text-white">{websiteHref}</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Service Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing across all our service categories with flexible plans and guaranteed results.
              </p>
            </div>

            <div className="space-y-16">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${tier.color}-500 to-${tier.color}-600 rounded-lg flex items-center justify-center mr-4`}>
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                      <p className="text-gray-600">{tier.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tier.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                        <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                        <div className="space-y-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          ROI: {service.roi}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Comparison */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Competitive Advantage
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our pricing is significantly more competitive than market leaders while delivering superior results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketComparisons.map((comparison, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{comparison.service}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Our Price:</span>
                      <span className="text-green-400 font-semibold">{comparison.ourPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Market Price:</span>
                      <span className="text-red-400">{comparison.marketPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Savings:</span>
                      <span className="text-yellow-400 font-bold">{comparison.savings}</span>
                    </div>
                    <div className="text-sm text-blue-300 mt-3">
                      <strong>Advantage:</strong> {comparison.advantage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Guarantees
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We stand behind our services with comprehensive guarantees and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                We deliver enterprise-grade solutions at competitive prices with unmatched support and guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-green-100">No hidden fees, clear pricing, and flexible payment options</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-green-100">Average 300% ROI within 12 months across all our clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-green-100">Certified professionals with decades of experience in AI and IT</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and custom quote tailored to your specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href={phoneHref} className="text-blue-200 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href={emailHref} className="text-blue-200 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-blue-200">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={phoneHref} 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a 
                  href={emailHref} 
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Request Custom Quote
                </a>
                <a 
                  href={websiteHref} 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}