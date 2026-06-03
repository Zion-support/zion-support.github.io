'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PartnerTier {
  id: string;
  name: string;
  icon: string;
  commission: string;
  benefits: string[];
  requirements: string[];
  color: string;
}

const partnerTiers: PartnerTier[] = [
  {
    id: 'referral',
    name: 'Referral Partner',
    icon: '🤝',
    commission: '15% recurring',
    benefits: [
      '15% recurring commission on all referred sales',
      'Unique referral tracking link',
      'Partner dashboard with real-time analytics',
      'Marketing materials & co-branded assets',
      'Monthly commission payouts',
      'Partner newsletter & updates'
    ],
    requirements: [
      'Active website or social media presence',
      'Basic understanding of AI/IT services',
      'Signed partner agreement'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'reseller',
    name: 'Reseller Partner',
    icon: '💼',
    commission: '25% recurring',
    benefits: [
      '25% recurring commission on all sales',
      'White-label option for select services',
      'Priority lead distribution',
      'Dedicated partner success manager',
      'Quarterly business reviews',
      'Advanced training & certifications',
      'Co-marketing development funds (MDF)'
    ],
    requirements: [
      'Minimum $10K monthly revenue commitment',
      'Certified sales & technical staff',
      'Customer support capability',
      'Active CRM integration'
    ],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'technology',
    name: 'Technology Partner',
    icon: '⚡',
    commission: 'Custom',
    benefits: [
      'API & integration partnerships',
      'Co-developed solutions',
      'Joint go-to-market strategies',
      'Technical integration support',
      'Shared roadmap planning',
      'Featured in Zion marketplace',
      'Joint customer case studies'
    ],
    requirements: [
      'Complementary technology/product',
      'Active development team',
      'Commitment to integration quality',
      'Mutual customer value proposition'
    ],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'strategic',
    name: 'Strategic Partner',
    icon: '🚀',
    commission: '30%+ custom',
    benefits: [
      '30%+ custom commission structure',
      'Executive sponsorship',
      'Joint account planning',
      'Custom solution development',
      'Priority product roadmap input',
      'Annual partner summit invitation',
      'Board-level strategic alignment',
      'Exclusive territory rights'
    ],
    requirements: [
      '$100K+ annual revenue commitment',
      'Enterprise customer relationships',
      'Dedicated Zion practice',
      'Strategic market alignment'
    ],
    color: 'from-rose-500 to-pink-500'
  }
];

const successStories = [
  { partner: 'TechSolutions Inc', revenue: '$450K', timeframe: '12 months', tier: 'Reseller', quote: 'Zion\'s partner program transformed our business. The AI services portfolio and commission structure exceeded our expectations.' },
  { partner: 'CloudFirst Consulting', revenue: '$280K', timeframe: '9 months', tier: 'Strategic', quote: 'The co-marketing funds and dedicated support helped us penetrate the enterprise market successfully.' },
  { partner: 'Digital Growth Agency', revenue: '$95K', timeframe: '6 months', tier: 'Referral', quote: 'Starting as a referral partner was easy. The tracking system and monthly payouts work flawlessly.' }
];

export default function PartnersPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', website: '', tier: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to our API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Hero */}
      <section className="py-20 container-page text-center">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
          🤝 Partner & Affiliate Program
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">
          Grow Your Business with Zion Tech Group
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Join our partner ecosystem and earn up to 30% recurring commissions on 1,100+ AI, IT, and Micro-SaaS services.
          Access world-class training, marketing support, and a dedicated partner success team.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#apply" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
            🚀 Become a Partner
          </a>
          <a href="#tiers" className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors">
            View Partner Tiers
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div><div className="text-3xl font-bold text-amber-400">500+</div><div className="text-slate-400">Active Partners</div></div>
          <div><div className="text-3xl font-bold text-orange-400">$12M+</div><div className="text-slate-400">Partner Revenue</div></div>
          <div><div className="text-3xl font-bold text-rose-400">30%</div><div className="text-slate-400">Max Commission</div></div>
          <div><div className="text-3xl font-bold text-pink-400">45+</div><div className="text-slate-400">Countries</div></div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-black/30">
        <div className="container-page">
          <h2 className="text-4xl font-bold text-center mb-12">Why Partner with Zion?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Industry-Leading Commissions', desc: 'Earn 15-30% recurring commissions on all services. No caps, no limits — the more you sell, the more you earn.' },
              { icon: '📚', title: 'Free Training & Certification', desc: 'Access 89+ courses through our AI Training Academy. Get certified and boost your credibility with clients.' },
              { icon: '🎯', title: 'Qualified Leads', desc: 'Receive pre-qualified leads matched to your expertise, geography, and industry focus.' },
              { icon: '🛠️', title: 'Sales Enablement Tools', desc: 'Battle cards, demo environments, ROI calculators, and proposal templates — all included.' },
              { icon: '📊', title: 'Real-Time Analytics', desc: 'Track referrals, conversions, and commissions in real-time through our partner dashboard.' },
              { icon: '🤝', title: 'Dedicated Support', desc: 'Every partner gets a dedicated success manager and priority technical support.' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section id="tiers" className="py-16">
        <div className="container-page">
          <h2 className="text-4xl font-bold text-center mb-4">Partner Tiers</h2>
          <p className="text-center text-slate-400 mb-12">Choose the partnership model that fits your business</p>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTiers.map(tier => (
              <div key={tier.id} className={`glass-card p-8 border-2 hover:border-amber-500/50 transition-all cursor-pointer ${selectedTier === tier.id ? 'border-amber-500' : 'border-transparent'}`}
                onClick={() => setSelectedTier(tier.id)}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <div className="text-amber-400 font-semibold">{tier.commission}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">✓ Benefits</h4>
                    <ul className="space-y-1 text-sm">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="text-slate-300">• {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">📋 Requirements</h4>
                    <ul className="space-y-1 text-sm">
                      {tier.requirements.map((r, i) => (
                        <li key={i} className="text-slate-300">• {r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-black/30">
        <div className="container-page">
          <h2 className="text-4xl font-bold text-center mb-12">Partner Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold">{story.tier}</span>
                  <span className="text-slate-400 text-sm">{story.timeframe}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{story.partner}</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">{story.revenue}</div>
                <p className="text-slate-400 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Apply', desc: 'Fill out our simple application form. We review within 48 hours.' },
              { step: '02', title: 'Onboard', desc: 'Complete free training, get certified, and access partner resources.' },
              { step: '03', title: 'Sell', desc: 'Use our tools and leads to close deals with your customers.' },
              { step: '04', title: 'Earn', desc: 'Receive monthly commission payouts with detailed statements.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Calculator */}
      <section className="py-16 bg-black/30">
        <div className="container-page max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">💰 Commission Calculator</h2>
          <p className="text-center text-slate-400 mb-8">See how much you can earn as a Zion partner</p>
          <CommissionCalculator />
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">🚀 Apply to Become a Partner</h2>
          <p className="text-center text-slate-400 mb-8">Join 500+ partners growing their business with Zion Tech Group</p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-amber-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-amber-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <input type="url" value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Partner Tier *</label>
                <select required value={formData.tier} onChange={e => setFormData({...formData, tier: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Select a tier</option>
                  {partnerTiers.map(t => <option key={t.id} value={t.id}>{t.name} ({t.commission})</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your business</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-bold hover:scale-[1.02] transition-transform">
                🚀 Submit Application
              </button>
            </form>
          ) : (
            <div className="glass-card p-12 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4">Application Received!</h3>
              <p className="text-slate-400 mb-6">Thank you for your interest in partnering with Zion Tech Group. Our team will review your application and get back to you within 48 hours.</p>
              <a href="mailto:partners@ziontechgroup.com" className="text-amber-400 hover:text-amber-300">partners@ziontechgroup.com</a>
            </div>
          )}

          <div className="mt-8 text-center text-slate-400">
            <p>Questions? Contact our partner team:</p>
            <p className="mt-2">
              📧 <a href="mailto:partners@ziontechgroup.com" className="text-amber-400">partners@ziontechgroup.com</a> • 
              📞 <a href="tel:+130****0950" className="text-amber-400">+1 302 464 0950</a>
            </p>
            <p className="mt-2 text-sm">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function CommissionCalculator() {
  const [deals, setDeals] = useState(5);
  const [avgDeal, setAvgDeal] = useState(2000);
  const [tier, setTier] = useState(25);

  const monthly = deals * avgDeal * (tier / 100);
  const yearly = monthly * 12;

  return (
    <div className="glass-card p-8">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm mb-2">Deals per Month</label>
          <input type="range" min="1" max="50" value={deals} onChange={e => setDeals(+e.target.value)} className="w-full" />
          <div className="text-2xl font-bold text-amber-400 mt-2">{deals} deals</div>
        </div>
        <div>
          <label className="block text-sm mb-2">Average Deal Size</label>
          <input type="range" min="500" max="20000" step="500" value={avgDeal} onChange={e => setAvgDeal(+e.target.value)} className="w-full" />
          <div className="text-2xl font-bold text-orange-400 mt-2">${avgDeal.toLocaleString()}</div>
        </div>
        <div>
          <label className="block text-sm mb-2">Commission Rate</label>
          <select value={tier} onChange={e => setTier(+e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg">
            <option value={15}>Referral (15%)</option>
            <option value={25}>Reseller (25%)</option>
            <option value={30}>Strategic (30%)</option>
          </select>
          <div className="text-2xl font-bold text-rose-400 mt-2">{tier}%</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
          <div className="text-sm text-slate-400 mb-2">Monthly Earnings</div>
          <div className="text-4xl font-bold text-green-400">${monthly.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 text-center">
          <div className="text-sm text-slate-400 mb-2">Annual Earnings</div>
          <div className="text-4xl font-bold text-amber-400">${yearly.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
        </div>
      </div>
    </div>
  );
}
