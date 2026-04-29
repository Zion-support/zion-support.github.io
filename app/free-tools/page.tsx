import React from 'react';
import Link from 'next/link';
import { Cloud, Code, Database, BarChart, BookOpen, Mail, Gift, Zap } from 'lucide-react';

const toolCategories = [
  {
    category: 'Cloud Hosting',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'Vercel', href: 'https://vercel.com/referral?source=ziontech&utm_medium=dashboard', desc: 'Serverless deployment platform' },
      { name: 'Netlify', href: 'https://www.netlify.com/referral/?utm_source=ziontech&utm_medium=dashboard', desc: 'Jamstack hosting' },
      { name: 'Railway', href: 'https://railway.app?referral=ziontech', desc: 'Modern cloud platform' },
      { name: 'Linode', href: 'https://www.linode.com/pricing/?utm_source=ziontech&utm_medium=dashboard', desc: 'Linux cloud hosting' },
      { name: 'DigitalOcean', href: 'https://m.do.co/c/1234567890?utm_source=ziontech&utm_medium=dashboard', desc: '$100 free credit' },
      { name: 'Vultr', href: 'https://www.vultr.com/?ref=ziontech', desc: 'High-performance cloud' },
    ]
  },
  {
    category: 'Development Tools',
    icon: Code,
    color: 'from-purple-500 to-indigo-500',
    tools: [
      { name: 'Gitpod', href: 'https://gitpod.io/?ref=ziontech', desc: 'Cloud development environments' },
      { name: 'Replit', href: 'https://replit.com/signup?ref=ziontech', desc: 'Online IDE & hosting' },
      { name: 'GitHub Sponsors', href: 'https://github.com/sponsors/Zion-support', desc: 'Support open-source' },
      { name: 'Travis CI', href: 'https://travis-ci.com/pricing', desc: 'Open-source CI/CD' },
    ]
  },
  {
    category: 'Data & AI',
    icon: Database,
    color: 'from-green-500 to-emerland-500',
    tools: [
      { name: 'Supabase', href: 'https://supabase.com/dashboard?ref=ziontech', desc: 'Open-source Firebase alt' },
      { name: 'OpenAI API', href: 'https://platform.openai.com/signup?ref=ziontech', desc: 'Free $18 API credit' },
      { name: 'Datadog', href: 'https://www.datadoghq.com/free?ref=ziontech', desc: 'Monitoring & analytics' },
    ]
  },
  {
    category: 'Newsletters & Ads',
    icon: Mail,
    color: 'from-pink-500 to-rose-500',
    tools: [
      { name: 'Substack', href: 'https://ziontech.substack.com/', desc: 'Newsletter platform' },
      { name: 'Buttondown', href: 'https://buttondown.email/', desc: 'Email newsletter (free tier)' },
      { name: 'Carbon Ads', href: 'https://www.carbonads.net/', desc: 'Ethical ad network' },
    ]
  },
  {
    category: 'Donations & Rewards',
    icon: Gift,
    color: 'from-amber-500 to-orange-500',
    tools: [
      { name: 'PayPal', href: 'https://www.paypal.com/donate?hosted_button_id=SAMPLE_PAYPAL_ID', desc: 'Secure donations' },
      { name: 'Buy Me a Coffee', href: 'https://www.buymeacoffee.com/', desc: 'One-time donations' },
      { name: 'Ko-fi', href: 'https://ko-fi.com/', desc: 'Support with a coffee' },
      { name: 'Brave Rewards', href: 'https://brave.com/brave-rewards/', desc: 'Tip with BAT tokens' },
      { name: 'Bitcoin Lightning', href: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=lnbc1placeholder', desc: 'BTC Lightning QR' },
    ]
  },
  {
    category: 'Learning & Books',
    icon: BookOpen,
    color: 'from-slate-500 to-slate-600',
    tools: [
      { name: 'Amazon Affiliate', href: 'https://amzn.to/3wxy123?tag=ziontech-20&utm_source=dashboard&utm_medium=monetization&utm_campaign=ziontech', desc: 'CI/CD tools & DevOps books' },
      { name: 'Bitly DevOps Books', href: 'https://bit.ly/3zXyDevOps?utm_source=dashboard&utm_medium=monetization', desc: 'Curated DevOps book list' },
    ]
  },
];

export const metadata = {
  title: 'Free Tools Directory | Zion Tech Group',
  description: 'Discover free tools for developers, DevOps, AI, and cloud. All links include referral benefits.',
};

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Free Tools Directory
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Curated list of free tools we use and recommend. Every link supports our open-source work at no extra cost to you.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {toolCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <section key={cat.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{cat.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {tool.desc}
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

        {/* CTA */}
        <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want More Free Tools?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Check our <Link href="/support" className="text-purple-400 hover:text-purple-300">Support page</Link> for even more free resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Support Page
              <Zap className="ml-1 h-4 w-4" />
            </Link>
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
