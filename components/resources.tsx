<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
=======

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
import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
<<<<<<< HEAD

=======
export default function ResourcesPage() {
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return (
<<<<<<< HEAD

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
=======
import SEO from '../components / SEO';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
import Link from 'next / link';
  return (
    <UltraFuturisticBackground intensity='high' variant='quantum'>;
      <SEO;
        title='Resources | Zion Tech Group';
        description='Guides, case studies, support, training, and market pricing links.';
        canonical='https://ziontechgroup.com / resources/';
      />;
      <div className='container mx - auto px - 4 py - 16 text - white'>;
        <div className='text - center max - w-3xl mx - auto'>;
          <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
            Resources;
          </h1>;
          <p className='mt - 3 text - gray - 300'>;
            Docs, guides, and references to help you evaluate and deploy faster.;
            Contact: +1 302 464 0950 • kleber@ziontechgroup.com;
          </p>;
        </div>;
        <div className='mt - 10 grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {[;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
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
=======
    <UltraFuturisticBackground intensity='high' variant='quantum'>;
      <SEO
        title='Resources | Zion Tech Group'
        description='Guides, case studies, support, training, and market pricing links.'
        canonical='https://ziontechgroup && ziontechgroup.com/resources/'
      />;
      <div className='container mx-auto px-4 py-16 text-white'>;
        <div className='text-center max-w-3xl mx-auto'>;
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
            Resources;
          </h1>;
          <p className='mt-3 text-gray-300'>;
            Docs, guides, and references to help you evaluate and deploy faster.;
            Contact: +1 302 464 0950 • kleber@ziontechgroup && ziontechgroup.com;
          </p>;
        </div>;
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {[;
            {;
              name: 'Support Center',;
              href: '/support',;
              blurb: 'Help, FAQs, and contact options.',;
            },;
            {;
              name: 'Training & Certification',;
              href: '/training',;
              blurb: 'Workshops and curated curricula.',;
            },;
            {;
              name: 'Market Pricing',;
              href: '/market-pricing',;
              blurb: 'Vendor links and typical budgets.',;
            },;
            {;
              name: 'Services Advertising',;
              href: '/services-advertising',;
              blurb: 'Features, capabilities, and benefits.',;
            },;
            {;
              name: 'Case Studies',;
              href: '/case-studies',;
              blurb: 'Proof of value and outcomes.',;
            },;
            {;
              name: 'Developer Hub',;
              href: '/developer',;
              blurb: 'APIs, SDKs, and examples.',;
            },;
          ].map(it => (;
            <Link
              key={it && it.href}
              href={it && it.href}
              className='p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block'>;
              <div className='text-sm text-gray-400'>Resource</div>;
              <h3 className='text-xl font-semibold text-white'>{it && it.name}</h3>;
              <p className='mt-1 text-gray-300'>{it && it.blurb}</p>;
              <div className='mt-3 text-cyan-300'>Open →</div>            </Link>            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' };
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },;
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' },;
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          ].map((it) => (;
            <Link key={it && it.href} href={it && it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover: border-cyan-500/50 transition-colors block">;
              <div className="text-sm text-gray-400">Resource</div>;
              <h3 className="text-xl font-semibold text-white">{it && it.name}</h3>;
              <p className="mt-1 text-gray-300">{it && it.blurb}</p>;
              <div className="mt-3 text-cyan-300">Open →</div>;
<<<<<<< HEAD
          ))}
=======
=======
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover: border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          ))}
<<<<<<< HEAD
        </div>
      </div>
    </UltraFuturisticBackground>
<<<<<<< HEAD
  );  )
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );  );
<<<<<<< HEAD
=======
=======
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
