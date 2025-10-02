import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Mail, MessageSquare, BarChart3, Users, Target, 
  Clock, CheckCircle, ArrowRight, Phone, 
  ExternalLink, Zap, Award, Globe, Smartphone, 
  Brain, Monitor, Shield, TrendingUp, Share2
} from 'lucide-react';

export const metadata = {
  title: 'Marketing Automation Solutions — Zion Tech Group',
  description: 'Comprehensive marketing automation micro SaaS solutions including email campaigns, social media, lead nurturing, and analytics.',
  keywords: 'marketing automation, email marketing, social media automation, lead nurturing, marketing analytics, micro SaaS',
};

export default function MarketingAutomationSolutions() {
  const phoneHref = "tel:+13024640950";
  const emailHref = "mailto:kleber@ziontechgroup.com";
  const websiteHref = "https://ziontechgroup.com";

  const marketingServices = [
    {
      name: 'AI-Powered Email Marketing Platform',
      description: 'Intelligent email marketing with personalization, automation, and advanced analytics.',
      price: '$199 - $1,499/month',
      eta: '2-3 weeks',
      features: [
        'AI-powered email personalization',
        'Automated drip campaigns and sequences',
        'Advanced segmentation and targeting',
        'A/B testing and optimization',
        'Detailed analytics and reporting'
      ],
      icon: Mail,
      category: 'Email Marketing',
      roi: '45% increase in email open rates',
      marketPrice: '$400 - $2,800/month',
      savings: 'Save up to 46%'
    },
    {
      name: 'Social Media Automation Suite',
      description: 'Complete social media management with content scheduling, engagement, and analytics.',
      price: '$149 - $999/month',
      eta: '2-3 weeks',
      features: [
        'Multi-platform content scheduling',
        'AI-powered content suggestions',
        'Automated engagement and responses',
        'Social media analytics and insights',
        'Influencer collaboration tools'
      ],
      icon: Share2,
      category: 'Social Media',
      roi: '60% increase in social media engagement',
      marketPrice: '$300 - $1,800/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Lead Nurturing & Scoring Platform',
      description: 'Intelligent lead management with automated nurturing campaigns and scoring algorithms.',
      price: '$299 - $2,499/month',
      eta: '3-4 weeks',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated nurturing campaigns',
        'Multi-channel lead tracking',
        'Sales team integration and alerts',
        'Lead conversion analytics'
      ],
      icon: Target,
      category: 'Lead Nurturing',
      roi: '70% improvement in lead conversion rates',
      marketPrice: '$600 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Marketing Analytics & Attribution Platform',
      description: 'Advanced marketing analytics with multi-touch attribution and ROI tracking.',
      price: '$399 - $2,999/month',
      eta: '3-4 weeks',
      features: [
        'Multi-touch attribution modeling',
        'Marketing ROI and performance tracking',
        'Customer journey analytics',
        'Campaign effectiveness analysis',
        'Custom reporting and dashboards'
      ],
      icon: BarChart3,
      category: 'Analytics',
      roi: '35% improvement in marketing ROI',
      marketPrice: '$800 - $5,500/month',
      savings: 'Save up to 45%'
    },
    {
      name: 'Content Marketing Automation',
      description: 'AI-powered content creation, distribution, and optimization across all channels.',
      price: '$249 - $1,799/month',
      eta: '2-3 weeks',
      features: [
        'AI-generated content creation',
        'Automated content distribution',
        'SEO optimization and keyword research',
        'Content performance tracking',
        'Brand voice consistency enforcement'
      ],
      icon: MessageSquare,
      category: 'Content Marketing',
      roi: '80% increase in content production',
      marketPrice: '$500 - $3,200/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Customer Journey Orchestration',
      description: 'Complete customer journey mapping and automation across all touchpoints.',
      price: '$499 - $3,499/month',
      eta: '3-4 weeks',
      features: [
        'Customer journey mapping and visualization',
        'Cross-channel journey automation',
        'Personalization at scale',
        'Real-time behavior tracking',
        'Journey optimization recommendations'
      ],
      icon: TrendingUp,
      category: 'Journey Orchestration',
      roi: '50% improvement in customer lifetime value',
      marketPrice: '$1,000 - $6,000/month',
      savings: 'Save up to 42%'
    }
  ];

  const itServices = [
    {
      name: 'Marketing Data Security Suite',
      description: 'Enterprise-grade security protecting customer data and marketing information.',
      price: '$399 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'Customer data encryption and protection',
        'GDPR and CCPA compliance monitoring',
        'Access control and audit logging',
        'Secure data backup and recovery',
        'Privacy monitoring and reporting'
      ],
      icon: Shield,
      category: 'Security',
      roi: '99.9% compliance rate maintained',
      marketPrice: '$800 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Marketing Cloud Infrastructure',
      description: 'Scalable cloud infrastructure optimized for marketing applications and high-volume data processing.',
      price: '$599 - $3,999/month',
      eta: '1-2 weeks',
      features: [
        'High-availability marketing cloud infrastructure',
        'Automated backup and disaster recovery',
        'Scalable resource allocation',
        '24/7 monitoring and support',
        'Integration with existing marketing systems'
      ],
      icon: Monitor,
      category: 'Infrastructure',
      roi: '45% reduction in infrastructure costs',
      marketPrice: '$1,200 - $6,500/month',
      savings: 'Save up to 38%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <Head>
        <title>Marketing Automation Solutions — Zion Tech Group</title>
        <meta name="description" content="Comprehensive marketing automation micro SaaS solutions including email campaigns, social media, lead nurturing, and analytics." />
        <meta name="keywords" content="marketing automation, email marketing, social media automation, lead nurturing, marketing analytics, micro SaaS" />
        <link rel="canonical" href={`${websiteHref}/services/marketing-automation-solutions`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Marketing Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Scale your marketing efforts with our comprehensive suite of marketing automation micro SaaS solutions. 
              From email campaigns to advanced analytics, we provide enterprise-grade marketing technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={phoneHref} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a href={emailHref} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </a>
              <a href={websiteHref} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Visit: ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Marketing Automation Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive marketing technology solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-pink-400 mr-3" />
                  <span className="text-sm text-pink-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-pink-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-pink-400">Your Savings:</span>
                    <span className="text-pink-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-pink-400 mr-2" />
                    <span className="text-pink-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-pink-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Supporting IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and security solutions for marketing applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <span className="text-sm text-purple-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400">Your Savings:</span>
                    <span className="text-purple-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-purple-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-purple-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Marketing Operations?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today for a free consultation and custom quote for your marketing automation needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our marketing automation experts</p>
              <a href={phoneHref} className="text-pink-400 font-semibold hover:text-pink-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information and pricing</p>
              <a href={emailHref} className="text-purple-400 font-semibold hover:text-purple-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <MapPin className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-indigo-400 font-semibold">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}