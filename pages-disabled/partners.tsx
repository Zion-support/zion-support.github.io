import React from 'react';'
import MainLayout from '../components/layout/MainLayout';'

const Partners: NextPage = () => {
  const partnerTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partners',
      description: 'Long-term partnerships that drive mutual growth and innovation.',
      benefits: ['Joint product development', 'Shared resources', 'Market expansion']
    }, {
      icon: Award,
      title: 'Technology Partners',
      description: 'Integration partnerships with leading technology providers.',
      benefits: ['API integrations', 'Technical support', 'Co-marketing opportunities']
    }, {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships for market reach.',
      benefits: ['Revenue sharing', 'Training programs', 'Marketing support']
    }, {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships for worldwide market presence.',
      benefits: ['Local expertise', 'Regional support', 'Cultural adaptation']
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure and AI services partnership',
      category: 'Technology Partner'
    }, {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Cloud computing and machine learning solutions',
      category: 'Technology Partner'
    }, {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and analytics platform integration',
      category: 'Technology Partner'
    }, {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Quantum computing and enterprise solutions',
      category: 'Strategic Partner'
    }, {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application integration',
      category: 'Technology Partner'
    }, {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience solutions',
      category: 'Technology Partner'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Star,
      title: 'Access to Cutting-Edge Technology',
      description: 'Leverage the latest innovations and technologies from our partners.'
    }, {
      icon: Users,
      title: 'Expanded Market Reach',
      description: 'Tap into new markets and customer segments through our partner network.'
    }, {
      icon: Award,
      title: 'Enhanced Credibility',
      description: 'Build trust with customers through our established partner relationships.'
    }, {
      icon: CheckCircle,
      title: 'Comprehensive Support',
      description: 'Access to expert support and resources from our partner ecosystem.'
    }
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships and learn how to become a Zion Tech Group partner. Join our ecosystem of technology leaders and innovators."
      keywords="partners, partnerships, strategic alliances, technology partners, channel partners, business partnerships"
    >
      <div className="min-h-screen bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 py-20">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>"
          <p className="text-xl text-gray-600">Coming soon...</p>"
        </div>
      </div>
    </MainLayout>
  )};

export default Page;
  );
};