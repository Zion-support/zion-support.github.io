<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
export default ResourcesPage;

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react';

=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
<<<<<<< HEAD

=======
export default ResourcesPage;
<<<<<<< HEAD

=======
import React from 'react';
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======

import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
export default Resources;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
