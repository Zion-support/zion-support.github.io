import React from 'react';
import Link from 'next/link';
import { Heart, Coffee, Github, DollarSign, Gift, Globe, Cpu, Database, Cloud, Zap, Shield, BookOpen, Code, Terminal, BarChart } from 'lucide-react';

const monetizationCategories = [
  {
    title: 'Donations & Support',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    links: [
      { name: 'GitHub Sponsors', href: 'https://github.com/sponsors/Zion-support', desc: 'Monthly sponsorship via GitHub' },
      { name: 'Patreon', href: 'https://patreon.com/', desc: 'Tiered membership subscriptions' },
      { name: 'Ko-fi', href: 'https://ko-fi.com/', desc: 'Support with a coffee' },
      { name: 'Buy Me a Coffee', href: 'https://www.buymeacoffee.com/', desc: 'One-time donations' },
      { name: 'PayPal Donation', href: 'https://www.paypal.com/donate?hosted_button_id=SAMPLE_PAYPAL_ID', desc: 'Secure PayPal donations' },
      { name: 'Liberapay', href: 'https://liberapay.com/', desc: 'Open-source recurrent donations' },
      { name: 'Flattr', href: 'https://flattr.com/', desc: 'Micro-donations for creators' },
      { name: 'Brave Rewards', href: 'https://brave.com/brave-rewards/', desc: 'Tip with BAT tokens' },
    ]
  },
  {
    title: 'Affiliate & Referrals',
    icon: Gift,
    color: 'from-purple-500 to-indigo-500',
    links: [
      { name: 'Amazon Affiliate', href: 'https://amzn.to/3wxy123?tag=ziontech-20&utm_source=dashboard&utm_medium=monetization&utm_campaign=ziontech', desc: 'CI/CD tools & DevOps books' },
      { name: 'Namecheap', href: 'https://www.namecheap.com/?aff=YX1234567890&utm_source=ziontech&utm_medium=dashboard', desc: 'Domain registration' },
      { name: 'DigitalOcean', href: 'https://m.do.co/c/1234567890?utm_source=ziontech&utm_medium=dashboard', desc: 'Cloud hosting $100 credit' },
      { name: 'Linode', href: 'https://www.linode.com/pricing/?utm_source=ziontech&utm_medium=dashboard', desc: 'Linux cloud hosting' },
      { name: 'Vultr', href: 'https://www.vultr.com/?ref=ziontech', desc: 'High-performance cloud' },
      { name: 'Vercel', href: 'https://vercel.com/referral?source=ziontech&utm_medium=dashboard', desc: 'Serverless deployment' },
      { name: 'Netlify', href: 'https://www.netlify.com/referral/?utm_source=ziontech&utm_medium=dashboard', desc: 'Jamstack hosting' },
      { name: 'Railway', href: 'https://railway.app?referral=ziontech', desc: 'Modern cloud platform' },
    ]
  },
  {
    title: 'Free Tools & Services',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Gitpod', href: 'https://gitpod.io/?ref=ziontech', desc: 'Cloud development environments' },
      { name: 'Replit', href: 'https://replit.com/signup?ref=ziontech', desc: 'Online IDE & hosting' },
      { name: 'Supabase', href: 'https://supabase.com/dashboard?ref=ziontech', desc: 'Open-source Firebase alt' },
      { name: 'OpenAI API', href: 'https://platform.openai.com/signup?ref=ziontech', desc: 'Free $18 API credit' },
      { name: 'Datadog', href: 'https://www.datadoghq.com/free?ref=ziontech', desc: 'Monitoring & analytics' },
      { name: 'Substack', href: 'https://ziontech.substack.com/', desc: 'Newsletter platform' },
      { name: 'Buttondown', href: 'https://buttondown.email/', desc: 'Email newsletter (free tier)' },
      { name: 'Travis CI', href: 'https://travis-ci.com/pricing', desc: 'Open-source CI/CD' },
    ]
  },
  {
    title: 'Digital Products & Services',
    icon: BookOpen,
    color: 'from-green-500 to-emerland-500',
    links: [
      { name: 'Gumroad', href: 'https://gumroad.com/', desc: 'Sell digital products' },
      { name: 'Bitly DevOps Books', href: 'https://bit.ly/3zXyDevOps?utm_source=dashboard&utm_medium=monetization', desc: 'Curated DevOps book list' },
      { name: 'OpenCollective', href: 'https://opencollective.com/', desc: 'Community sponsorship' },
      { name: 'Carbon Ads', href: 'https://www.carbonads.net/', desc: 'Ethical ad network' },
      { name: 'Donate Crypto', href: 'https://donatewallet.com/', desc: 'BTC/ETH donations' },
      { name: 'Cloudflare Pages', href: 'https://pages.cloudflare.com/', desc: 'Free static hosting' },
      { name: 'Lightning Donation (BTC)', href: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=lnbc1placeholder', desc: 'BTC Lightning QR (free)' }
    ]
  }
];

export const metadata = {
  title: 'Support Zion Tech Group | Free Tools & Donations',
  description: 'Support our open-source work and discover free tools we use. All monetization via free platforms.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Support Our Work
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Help us keep building free, open-source AI tools. Every link below uses free platforms – no paid tools required.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {monetizationCategories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {link.desc}
                      </p>
                      <div className="mt-4 flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Visit <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 p-8 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 border border-purple-500/30 rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">📬 Newsletter Signup</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get updates on new free tools, monetization tips, and open-source projects.
            </p>
            <form 
              action="https://buttondown.email/api/emails/embed" 
              method="post" 
              target="_blank"
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input 
                type="email" 
                name="email" 
                placeholder="your@email.com" 
                required 
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
