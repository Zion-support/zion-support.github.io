<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
=======
import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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
import React from 'react';

            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }

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
=======

import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default Resources;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
