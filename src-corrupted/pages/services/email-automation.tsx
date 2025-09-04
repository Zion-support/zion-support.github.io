import React from 'react';
import Link from 'next/link';
import { Mail, Check, ExternalLink, Phone, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Users, Clock, DollarSign, Send } from 'lucide-react';

export default function EmailAutomation(props: any) {
  const features = [
    'AI-powered email sequence automation',
    'Smart lead nurturing campaigns',
    'Behavioral trigger-based emails',
    'A/B testing and optimization',
    'Advanced segmentation and personalization',
    'Email template library with customization',
    'Deliverability monitoring and optimization',
    'Real-time analytics and reporting',
    'Integration with CRM and marketing tools',
    'Compliance with GDPR and CAN-SPAM'
  ];

  const benefits = [
    'Increase email open rates by 65%',
    'Boost click-through rates by 45%',
    'Reduce manual email tasks by 90%',
    'Improve lead conversion by 35%',
    'Enhance customer engagement and retention',
    'Scale email marketing efforts efficiently'
  ];

  const useCases = [
    'E-commerce & Retail',
    'SaaS & Technology',
    'Real Estate',
    'Healthcare & Wellness',
    'Financial Services',
    'Education & Training',
    'Professional Services',
    'Non-profit Organizations'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$49/mo',
      details: [
        'Up to 10,000 emails/month',
        '5 automation sequences',
        'Basic templates',
        'Email support',
        'Standard analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$149/mo',
      details: [
        'Up to 50,000 emails/month',
        'Unlimited sequences',
        'Advanced templates & customization',
        'Priority support',
        'Advanced analytics & reporting',
        'A/B testing'
      ]
    },
    {
      name: 'Enterprise',
      price: '$399/mo',
      details: [
        'Unlimited emails/month',
        'Custom automation workflows',
        'White-label solution',
        '24/7 dedicated support',
        'API access',
        'Custom integrations',
        'Advanced segmentation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Mail className="w-4 h-4 mr-2"  />
            AI-Powered Email Automation
          </div>
          <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">Email Automation Platform</h1>
          <p className="text-green-100 text-xl">
            Automate your email marketing with AI-driven campaigns that nurture leads and drive conversions.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md: gri d-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Email Automation Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, GDPR compliance, and 99.9% uptime SLA.
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="space-y-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover: borde r-green-300 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg font-semibold">{tier.name}</div>
                    <div className="text-2xl font-bold text-green-600">{tier.price}</div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="px-5 py-3 bg-green-600 text-white rounded-lg hover: b g-green-700 transition-colors inline-flex items-center">
                Start Free Trial <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/demo" className="px-5 py-3 border border-green-600 text-green-600 rounded-lg hover: b g-green-50 transition-colors inline-flex items-center">
                Schedule Demo <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-green-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover: shado w-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-green-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Email automation solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Email Marketing?</h2>
          <p className="text-green-100 text-xl mb-8">
            Start nurturing leads and driving conversions with our AI-powered email automation platform.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-green-600 rounded-lg hover: b g-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover: b g-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Send className="w-4 h-4 ml-2"  />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}