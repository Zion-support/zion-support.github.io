import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Partners solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Partners</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive partners solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}