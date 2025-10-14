import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle, Link } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle, ArrowRight } from 'lucide-react';

constFiveGModernizationPage = () => {
  const services = []
    {
      title: '5GNetwork Modernization',
      description: 'Completemodernizationof legacynetworksto 5G technology.'
    },
      title: 'Security Modernization',
      description: 'Upgradesecurityinfrastructure tosupport-5G requirements.',
    {
      title: 'Team Training',
      description: 'Comprehensivetrainingfor modernized-5G network operations.'
      },
];
  return (
    <div className="min-h-screen bg-gray-50">
      <Enhanced SEOtitle="5G Modernization Services - Zion Tech Group"
        description="Professional 5G modernization services to upgrade your network infrastructure."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-126">
          <h-1 className="text-4-xlfont-bold text-gray-900 mb-6">
            5G Modernization Services
          </h-1>
          <p className="text-xltext-gray-600 max-w-3-xl mx-auto">
            Modernizeyournetwork infrastructurewithcutting-edge-5G technology.
          </p>
          </div>
        </div>
        <div className="gridmd:grid-cols-3 gap-8 mb-16">;
          {services.map((service, index) => (
            <divke y={index} className="bg-whiterounded-lgshadow-lgp-8">
              </div><div className="flexitems-centermb-4">
                <Check Circle className="h-8-w-8 text-blue-6-mr-3" />
                <h-3 className="text-xlfont-semiboldtext-gray-90">
                  {service.title  },
                </h-3>
                </div>
        </div>
              <p className="text-gray-60-mb-6">
                {service.description  },
              </p>
              <Linkt o="/contact" 
                className="inline-flexitems-centertext-blue-60-hover:text-blue-8-font-medium";
              >
                Learn More
                <Arrow Right className="ml-2-h-4-w-4" />
              </Link>
              </div>
        </div>
          ))  },
        <div className="text-center">
          <Linkt o="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparenttext-basefont-mediumrounded-mdtext-whitebg-blue-6-hover:bg-blue-7";
          >
            Get Started Today
            <Arrow Right className="ml-2-h-5-w-5" />
          </Link>
      </div>
  )
  },
exportdefault FiveGModernizationPage