>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React from 'react';
import SEO from '../components/SEO';

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (

    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Resources | Zion Tech Group" description="Guides, case studies, support, training, and market pricing links." canonical="https://ziontechgroup.com/resources/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</h1>
          <p className="mt-3 text-gray-300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' }
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' }
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' }
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' }
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' }
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
            </Link>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  )
}
=======
import React from 'react',
import SEO from '../components / SEO',
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground',
import Link from 'next / link',
export default /**
 * ResourcesPage - Function description
 */
function ResourcesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Resources | Zion Tech Group" description="Guides, case studies, support, training, and market pricing links." canonical="https://ziontechgroup.com / resources/" />;
      <div className="container mx - auto px - 4 py - 16 text - white">;
        <div className="text - center max - w-3xl mx - auto">;
          <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Resources</h1>;
          <p className="mt - 3 text - gray - 300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>;
        </div>;
        <div className="mt - 10 grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {[;
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' },
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market - pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services - advertising', blurb: 'Features, capabilities, and benefits.' },
            { name: 'Case Studies', href: '/case - studies', blurb: 'Proof of value and outcomes.' },
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map ((it) => (
            <Link key={it.href} href={it.href} className="p - 6 rounded - 2xl bg - black / 50 border border - gray - 800 hover:border - cyan - 500 / 50 transition - colors block">;
              <div className="text - sm text - gray - 400">Resource</div>;
              <h3 className="text - xl font - semibold text - white">{it.name}</h3>;
              <p className="mt - 1 text - gray - 300">{it.blurb}</p>;
              <div className="mt - 3 text - cyan - 300">Open →</div>;
            </Link>))}
        </div>;
      </div>;
    </UltraFuturisticBackground>);
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Whitepapers */}
      <section id="whitepapers" className="py - 20 bg - slate - 50">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
                key={paper.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - white rounded - 2xl shadow - lg overflow - hidden hover:shadow - xl transition - all duration - 300";
              >;
                <div className="bg - gradient - to - br from - blue - 500 to - cyan - 500 p - 8">;
                  <div className="flex items - center justify - between mb - 4">;
                    <span className="inline - block bg - white / 20 px - 3 py - 1 rounded - full text - sm text - white">;
                      {paper.category}
      {/* Case Studies */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
                key={study.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
      {/* Videos */}
      <section className="py - 20 bg - slate - 900">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
                key={video.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - white / 5 backdrop - blur - xl rounded - 2xl border border - white / 10 overflow - hidden hover:bg - white / 10 transition - all duration - 300";
              >;
                <div className="bg - gradient - to - br from - blue - 500 to - cyan - 500 p - 6 text - center">;
                  <Play className="w - 12 h - 12 text - white mx - auto mb - 3" />;
                  <span className="inline - block bg - white / 20 px - 3 py - 1 rounded - full text - sm text - white">;
                    {video.category}
      {/* Documentation */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
                key={doc.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
      {/* CTA */}
      <section className="py - 20 bg - gradient - to - r from - blue - 600 to - cyan - 600">;
        <div className="max - w-4xl mx - auto px - 6 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
=======
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">Need More Resources?</h2>;
            <p className="text - xl text - blue - 100 mb - 8">;
              Can't find what you're looking for? Our team is here to help with custom research,
              personalized consultations, and tailored solutions for your specific needs.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="/contact";
                className="bg - white text - blue - 600 hover:bg - blue - 50 px - 8 py - 4 rounded - xl font - semibold text - lg transition - all duration - 200 transform hover:scale - 105";
              >;
                Contact Our Experts;
              </a>;
              <a;
                href="/contact";
                className="border border - white / 20 text - white hover:bg - white / 10 px - 8 py - 4 rounded - xl font - semibold text - lg transition - all duration - 200";
              >;
                Request Custom Research;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
