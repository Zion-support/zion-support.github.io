<<<<<<< HEAD

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
export default function ResourcesPage() {return (class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
import React from 'react';

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
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (;
            <Link key={it && it.href} href={it && it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover: border-cyan-500/50 transition-colors block">;
              <div className="text-sm text-gray-400">Resource</div>;
              <h3 className="text-xl font-semibold text-white">{it && it.name}</h3>;
              <p className="mt-1 text-gray-300">{it && it.blurb}</p>;
              <div className="mt-3 text-cyan-300">Open →</div>;
          ))}
        </div>;
    </UltraFuturisticBackground>;
  );  )
};


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
              className='p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block'><div className='text-sm text-gray-400'>Resource</div>
              <h3 className='text-xl font-semibold text-white'>{it.name}</h3>
              <p className='mt-1 text-gray-300'>{it.blurb}</p>
              <div className='mt-3 text-cyan-300'>Open →</div>            </Link>            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' }
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' }
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' }
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' }
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' }
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map ((it) => (
            <Link key={it.href} href={it.href} className="p - 6 rounded - 2xl bg - black / 50 border border - gray - 800 hover: border - cyan-500 / 50 transition-colors block">;
              <div className="text - sm text-gray-400">Resource</div>;
              <h3 className="text - xl font-semibold text-white">{it.name}</h3>;
              <p className="mt - 1 text-gray-300">{it.blurb}</p>;
              <div className="mt - 3 text-cyan-300">Open →</div>))}
        </div>;
    </UltraFuturisticBackground>))}export default ResourcesPage;<div className='mt-3 text-cyan-300'>Open →</div>;
            </Link>;
          ))}
        </div>;
    </UltraFuturisticBackground>;
    </UltraFuturisticBackground>));
}
;
export default ResourcesPage;
;
)export default ResourcesPage;
export default function ResourcesPage() {
}
return (;

              <div className='mt-3 text-cyan-300'>Open →</div>'
            </Link>
          ))}
        </div>
    </UltraFuturisticBackground>
  )
};

export default ResourcesPage;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
);

export default ResourcesPage;
<<<<<<< HEAD




=======
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
}
export default ResourcesPage

import React from 'react';

>>>>>>> origin/cursor/delete-old-data-records-6bba
