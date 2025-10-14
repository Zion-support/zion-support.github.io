
import { Helmet } from 'react-helmet-async';

import { Users, Globe, Shield, Zap } from 'lucide-react';

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

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Joint Marketing",
      description: "Collaborative marketing campaigns and co-branded content"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to our worldwide network of clients and opportunities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Technical Support",
      description: "Dedicated technical resources and training programs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Labs",
      description: "Joint innovation initiatives and R&D projects"
    }
  ];

  const tiers = [
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic partnerships that drive innovation and deliver exceptional value to our clients.
            </p>
          </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Our Partners</h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Strategic partnerships that drive innovation and growth
          </p>
        </div>
      </div>
    </>
  );
}