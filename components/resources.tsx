import React from 'react',
import SEO from '../components/SEO',
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (
import React from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover: border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>

          ))}
        </div>
      </div>
    </UltraFuturisticBackground>

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
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }

=======
export default ResourcesPage;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

};
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default ResourcesPage;

=======

import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
