import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
  return (
            {
              name: 'Support Center'
              href: '/support'
              blurb: 'Help, FAQs, and contact options.'
            }
            {
              name: 'Training & Certification'
              href: '/training'
              blurb: 'Workshops and curated curricula.'
            }
            {
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (;
            <Link key={it && it.href} href={it && it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover: border-cyan-500/50 transition-colors block">;
              <div className="text-sm text-gray-400">Resource</div>;
              <h3 className="text-xl font-semibold text-white">{it && it.name}</h3>;
              <p className="mt-1 text-gray-300">{it && it.blurb}</p>;
              <div className="mt-3 text-cyan-300">Open →</div>;
          ))}
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );  );
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ResourcesPage;

=======
              name: 'Market Pricing',
              href: '/market - pricing',
              blurb: 'Vendor links and typical budgets.',
            },
            {
              name: 'Services Advertising',
              href: '/services - advertising',
              blurb: 'Features, capabilities, and benefits.',
            },
            {
              name: 'Case Studies',
              href: '/case - studies',
              blurb: 'Proof of value and outcomes.',
            },
            {
              name: 'Developer Hub',
              href: '/developer',
              blurb: 'APIs, SDKs, and examples.',
            },
          ].map (it => (
            <Link;
              key={it.href}
              href={it.href}
              className='p - 6 rounded - 2xl bg - black / 50 border border - gray - 800 hover:border - cyan - 500 / 50 transition - colors block';
            >;
              <div className='text - sm text - gray - 400'>Resource</div>;
              <h3 className='text - xl font - semibold text - white'>{it.name}</h3>;
              <p className='mt - 1 text - gray - 300'>{it.blurb}</p>;
              <div className='mt - 3 text - cyan - 300'>Open →</div>            </Link>            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' }
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market - pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services - advertising', blurb: 'Features, capabilities, and benefits.' }
            { name: 'Case Studies', href: '/case - studies', blurb: 'Proof of value and outcomes.' },
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map ((it) => (
            <Link key={it.href} href={it.href} className="p - 6 rounded - 2xl bg - black / 50 border border - gray - 800 hover: border - cyan - 500 / 50 transition - colors block">;
              <div className="text - sm text - gray - 400">Resource</div>;
              <h3 className="text - xl font - semibold text - white">{it.name}</h3>;
              <p className="mt - 1 text - gray - 300">{it.blurb}</p>;
              <div className="mt - 3 text - cyan - 300">Open →</div>))}
        </div>;
      </div>;
    </UltraFuturisticBackground>));
}
;
export default ResourcesPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
