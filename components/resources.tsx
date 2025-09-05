import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function ResourcesPage() {_return (_<UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Resources | Zion Tech Group" description="Guides, _case studies, _support, _training, _and market pricing links." canonical="https://ziontechgroup.com/resources/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</h1>
          <p className="mt-3 text-gray-300">Docs, _guides, _and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Support Center', _href: '/support', _blurb: 'Help, _FAQs, _and contact options.'}, _{_name: 'Training & Certification', _href: '/training', _blurb: 'Workshops and curated curricula.'}, _{_name: 'Market Pricing', _href: '/market-pricing', _blurb: 'Vendor links and typical budgets.'}, _{_name: 'Services Advertising', _href: '/services-advertising', _blurb: 'Features, _capabilities, _and benefits.'}, _{_name: 'Case Studies', _href: '/case-studies', _blurb: 'Proof of value and outcomes.'}, _{_name: 'Developer Hub', _href: '/developer', _blurb: 'APIs, _SDKs, _and examples.'}
          ].map((it) => (
            <Link key={_it.href} href={_it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{_it.name}</h3>
              <p className="mt-1 text-gray-300">{_it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
            </Link>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  );
};

export default ResourcesPage;
