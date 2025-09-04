import React from 'react';
import Link from 'next/link';
import { Calendar, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Users, Clock, DollarSign, Ticket } from 'lucide-react';

export default function EventManagement(props: any) {
  const features = [
    'AI-powered event planning and optimization',
    'Automated registration and ticketing system',
    'Real-time attendee management and check-in',
    'Smart scheduling and resource allocation',
    'Interactive event mobile app',
    'Live streaming and virtual event capabilities',
    'Advanced analytics and attendee insights',
    'Integration with marketing and CRM tools',
    'Multi-language support and accessibility',
    'Post-event feedback and survey automation'
  ];

  const benefits = [
    'Reduce event planning time by 60%',
    'Increase attendee engagement by 40%',
    'Improve event ROI by 35%',
    'Streamline registration and check-in processes',
    'Enhance attendee experience and satisfaction',
    'Scale event operations efficiently'
  ];

  const useCases = [
    'Corporate Events & Conferences',
    'Trade Shows & Exhibitions',
    'Webinars & Virtual Events',
    'Weddings & Private Events',
    'Educational & Training Events',
    'Sports & Entertainment',
    'Non-profit & Fundraising',
    'Government & Public Events'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99/mo',
      details: [
        'Up to 100 attendees/event',
        'Basic registration system',
        'Email support',
        'Standard analytics',
        'Mobile app access'
      ]
    },
    {
      name: 'Professional',
      price: '$299/mo',
      details: [
        'Up to 1,000 attendees/event',
        'Advanced registration & ticketing',
        'Priority support',
        'Advanced analytics',
        'Live streaming capabilities',
        'Custom branding'
      ]
    },
    {
      name: 'Enterprise',
      price: '$799/mo',
      details: [
        'Unlimited attendees',
        'White-label solution',
        '24/7 dedicated support',
        'API access',
        'Custom integrations',
        'Advanced automation',
        'Multi-event management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Calendar className="w-4 h-4 mr-2"  />
            AI-Powered Event Management
          </div>
          <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">Event Management Platform</h1>
          <p className="text-orange-100 text-xl">
            Plan, manage, and execute exceptional events with AI-powered tools and intelligent automation.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md: gri d-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Event Management Features</h2>
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
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover: borde r-orange-300 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg font-semibold">{tier.name}</div>
                    <div className="text-2xl font-bold text-orange-600">{tier.price}</div>
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
              <Link href="/contact" className="px-5 py-3 bg-orange-600 text-white rounded-lg hover: b g-orange-700 transition-colors inline-flex items-center">
                Start Free Trial <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/demo" className="px-5 py-3 border border-orange-600 text-orange-600 rounded-lg hover: b g-orange-50 transition-colors inline-flex items-center">
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
                  <Zap className="w-6 h-6 text-orange-600 mr-3"  />
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
                  <Target className="w-5 h-5 text-orange-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Event management solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Event Management?</h2>
          <p className="text-orange-100 text-xl mb-8">
            Start planning and executing exceptional events with our AI-powered management platform.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-orange-600 rounded-lg hover: b g-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover: b g-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Ticket className="w-4 h-4 ml-2"  />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}