<<<<<<< HEAD
</div> <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" > {
=======
import React from 'react',
import SEO from '../components/SEO',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-300 mb-4">
              Comprehensive guides and API documentation for all our services.
            </p>
            <Link href="/docs" className="text-blue-400 hover:text-blue-300">
              View Documentation →
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tutorials</h2>
            <p className="text-gray-300 mb-4">
              Step-by-step tutorials to help you get started quickly.
            </p>
            <Link href="/tutorials" className="text-blue-400 hover:text-blue-300">
              Browse Tutorials →
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <p className="text-gray-300 mb-4">
              Get help from our support team and community.
            </p>
            <Link href="/support" className="text-blue-400 hover:text-blue-300">
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );  )
}
export default ResourcesPage;

 </div> <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" > {
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
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
<<<<<<< HEAD
}
export default ResourcesPage
=======
};

export default Resources;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
