<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export default ResourcesPage;
=======
import React from 'react';

            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

};

<<<<<<< HEAD
export default Resources;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ResourcesPage;

=======
=======
import React from 'react';
  return(<UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Resources | Zion Tech Group" description="Guides, case studies, support, training, and market pricing links." canonical="https://ziontechgroup.com/resources/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</h1>
<p className="mt-3 text-gray-300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' };
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import SEO from '../components/SEO',
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (

    <UltraFuturisticBackground intensity='high' variant='quantum'>
      <SEO
        title='Resources | Zion Tech Group'
        description='Guides, case studies, support, training, and market pricing links.'
        canonical='https://ziontechgroup.com/resources/'
      />
      <div className='container mx-auto px-4 py-16 text-white'>
        <div className='text-center max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Resources
          </h1>
          <p className='mt-3 text-gray-300'>
            Docs, guides, and references to help you evaluate and deploy faster.
            Contact: +1 302 464 0950 • kleber@ziontechgroup.com
          </p>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
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
              name: 'Market Pricing'
              href: '/market-pricing'
              blurb: 'Vendor links and typical budgets.'
            }
            {
              name: 'Services Advertising'
              href: '/services-advertising'
              blurb: 'Features, capabilities, and benefits.'
            }
            {
              name: 'Case Studies'
              href: '/case-studies'
              blurb: 'Proof of value and outcomes.'
            }
            {
              name: 'Developer Hub'
              href: '/developer'
              blurb: 'APIs, SDKs, and examples.'
            }
          ].map(it => (
            <Link
              key={it.href}
              href={it.href}
              className='p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block'
            >
              <div className='text-sm text-gray-400'>Resource</div>
              <h3 className='text-xl font-semibold text-white'>{it.name}</h3>
              <p className='mt-1 text-gray-300'>{it.blurb}</p>
              <div className='mt-3 text-cyan-300'>Open →</div>            </Link>            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' }
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' }
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' }
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' }
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover: border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
<<<<<<< HEAD
            </Link>
          ))}
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );  );
  )
};
export default ResourcesPage;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        </div>
        <div className=&quot;mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {[
            { name: 'Support Center', _href: '/support', _blurb: 'Help, _FAQs, _and contact options.'}, _{_name: 'Training & Certification', _href: '/training', _blurb: 'Workshops and curated curricula.'}, _{_name: 'Market Pricing', _href: '/market-pricing', _blurb: 'Vendor links and typical budgets.'}, _{_name: 'Services Advertising', _href: '/services-advertising', _blurb: 'Features, _capabilities, _and benefits.'}, _{_name: 'Case Studies', _href: '/case-studies', _blurb: 'Proof of value and outcomes.'}, _{_name: 'Developer Hub', _href: '/developer', _blurb: 'APIs, _SDKs, _and examples.'}
          ].map((it) => (
            <Link key={it.href} href={it.href} className=&quot;p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block&quot;>
              <div className=&quot;text-sm text-gray-400&quot;>Resource</div>
              <h3 className=&quot;text-xl font-semibold text-white&quot;>{it.name}</h3>
              <p className=&quot;mt-1 text-gray-300&quot;>{it.blurb}</p>
              <div className=&quot;mt-3 text-cyan-300&quot;>Open →</div>
            </a>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
<<<<<<< HEAD
  )
},

export default ResourcesPage

=======
  );  )
}
export default ResourcesPage;

import React from 'react';

 </div> <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" > {
  [ {
  name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' 
}, {
  name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' 
}, {
  name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' 
}, {
  name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' 
}, {
  name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' 
}, {
  name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' 
}].map ( (it) => () ) 
}</div> </div> </UltraFuturisticBackground>) 
};

export default Resources;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
