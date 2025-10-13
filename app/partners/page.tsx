import { Helmet } from 'react-helmet-async';

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      description: "Leading cloud and productivity solutions",
      category: "Technology Partner",
      tier: "Platinum"
    },
    {
      name: "Amazon Web Services",
      logo: "/images/partners/aws.png",
      description: "Comprehensive cloud computing platform",
      category: "Cloud Partner",
      tier: "Platinum"
    },
    {
      name: "Google Cloud",
      logo: "/images/partners/google-cloud.png",
      description: "AI and machine learning cloud services",
      category: "AI Partner",
      tier: "Gold"
    },
    {
      name: "Salesforce",
      logo: "/images/partners/salesforce.png",
      description: "Customer relationship management platform",
      category: "CRM Partner",
      tier: "Gold"
    },
    {
      name: "IBM",
      logo: "/images/partners/ibm.png",
      description: "Enterprise AI and hybrid cloud solutions",
      category: "Enterprise Partner",
      tier: "Silver"
    },
    {
      name: "Oracle",
      logo: "/images/partners/oracle.png",
      description: "Database and enterprise software solutions",
      category: "Database Partner",
      tier: "Silver"
    }
  ];

  const partnerTiers = [
    {
      name: "Platinum",
      color: "from-gray-400 to-gray-600",
      requirements: "Strategic partnership with significant revenue commitment",
      benefits: ["Highest priority support", "Dedicated account manager", "Custom solutions", "Joint go-to-market"]
    },
    {
      name: "Gold",
      color: "from-yellow-400 to-yellow-600",
      requirements: "Strong partnership with regular collaboration",
      benefits: ["Priority support", "Training programs", "Marketing support", "Technical resources"]
    },
    {
      name: "Silver",
      color: "from-gray-300 to-gray-500",
      requirements: "Partnership with mutual business opportunities",
      benefits: ["Standard support", "Partner portal access", "Co-marketing opportunities", "Technical documentation"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, strategic alliances" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Strategic partnerships that drive innovation and deliver exceptional value to our clients.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{partner.category}</p>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${
                    partner.tier === 'Platinum' ? 'bg-gray-400 text-gray-900' :
                    partner.tier === 'Gold' ? 'bg-yellow-400 text-yellow-900' :
                    'bg-gray-300 text-gray-700'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Tiers */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.requirements}</p>
                  <ul className="text-left text-gray-400 text-sm space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}