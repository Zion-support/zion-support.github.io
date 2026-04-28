import React from 'react';
import Link from 'next/link';
import { Trophy, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const sponsorshipTiers = [
  {
    name: 'Community',
    price: 'Free',
    icon: Star,
    color: 'from-gray-400 to-gray-500',
    features: [
      'Your logo on Support page',
      'Link to your product/service',
      'Mention in newsletter (10k+ subs)',
    ],
    cta: 'Apply Now',
    ctaLink: 'https://tally.so/r/your-form-id?tier=community'
  },
  {
    name: 'Bronze',
    price: '$99/month',
    icon: Trophy,
    color: 'from-amber-600 to-amber-700',
    features: [
      'All Community benefits',
      'Logo on Footer (site-wide)',
      'Dedicated section in newsletter',
      'Social media shoutout (1x/month)',
    ],
    cta: 'Sponsor Now',
    ctaLink: 'https://tally.so/r/your-form-id?tier=bronze',
    popular: false
  },
  {
    name: 'Silver',
    price: '$299/month',
    icon: Zap,
    color: 'from-slate-300 to-slate-400',
    features: [
      'All Bronze benefits',
      'Homepage banner (30 days)',
      'Product feature in blog post',
      'Monthly social media features',
      'Quarterly ROI report',
    ],
    cta: 'Sponsor Now',
    ctaLink: 'https://tally.so/r/your-form-id?tier=silver',
    popular: true
  },
  {
    name: 'Gold',
    price: '$999/month',
    icon: Crown,
    color: 'from-yellow-400 to-yellow-500',
    features: [
      'All Silver benefits',
      'Premium homepage placement',
      'Dedicated webinar opportunity',
      'Custom integration consulting (4hrs)',
      'Direct access to dev team',
      'Logo on all marketing materials',
    ],
    cta: 'Contact Sales',
    ctaLink: 'https://tally.so/r/your-form-id?tier=gold'
  }
];

export const metadata = {
  title: 'Sponsorship Opportunities | Zion Tech Group',
  description: 'Sponsor our open-source AI tools and reach 10k+ developers. Multiple tiers available.',
};

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Sponsorship Opportunities
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Support open-source AI development and reach thousands of developers. 
            All sponsorship management via free tools.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Monthly Visitors', value: '10k+' },
            { label: 'Newsletter Subscribers', value: '10k+' },
            { label: 'GitHub Stars', value: '500+' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsorshipTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div 
                key={tier.name}
                className={`relative p-8 bg-slate-800/50 border rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                  tier.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-400'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tier.color} mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-white mb-6">{tier.price}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 text-center font-semibold rounded-xl transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="p-8 bg-slate-800/30 border border-slate-700 rounded-3xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Sponsor Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Free Management', desc: 'All sponsorship tracking via free tools (Google Analytics, Tally forms)' },
              { title: 'Transparent Reporting', desc: 'Monthly reports via automated scripts (no paid tools)' },
              { title: 'Developer Audience', desc: 'Reach AI/ML engineers, DevOps professionals, and tech leaders' },
            ].map((benefit) => (
              <div key={benefit.title} className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-300 mb-4">Questions? Reach us at:</p>
          <a 
            href="mailto:sponsorship@ziontechgroup.com"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            sponsorship@ziontechgroup.com
          </a>
        </div>

        {/* Back to Support */}
        <div className="mt-12 text-center">
          <Link 
            href="/support"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Support Page
          </Link>
        </div>
      </div>
    </div>
  );
}
