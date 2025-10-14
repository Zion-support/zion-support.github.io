import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle, Link } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

constFiveGConsultingPage = () => {
  const services = [
    {
      title: '5G Strategy Development',
      description: 'Comprehensive 5G implementation strategies tailored to your business needs.',
    },
    {
      title: 'Security Assessment',
      description: 'Completesecurityevaluation for-5G network implementation.',
    },
    {
      title: 'Team Training',
      description: 'Experttrainingfor yourteamon 5Gtechnologies andbestpractices.',
      },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Enhanced SEOtitle="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-126">
          <h-1 className="text-4-xlfont-bold text-gray-900 mb-6">
            5G Consulting Services
          </h-1>
          <p className="text-xltext-gray-600 max-w-3-xl mx-auto">
            Expertguidancefor your-5G transformation journey
          </p>
          </div>
        </div>
        <div className="gridmd:grid-cols-3 gap-8 mb-16">;
          {services.map((service, index) => (
            <divke y={index} className="bg-whiterounded-lgshadow-lgp-6">
              <h-3 className="text-xlfont-semiboldtext-gray-90-mb-4">
                {service.title  },
              </h-3>
              <p className="text-gray-60-mb-4">
                {service.description  },
              </p>
              <Linkt o="/contact" 
                className="inline-flexitems-center text-blue-600-hover:text-blue-800 font-medium"
              >
                Learn More
                <Arrow Right className="ml-2-w-4 h-4" />
              </Link>
            </div>
          ))  },
        <div className="text-center">
          <Linkt o="/contact" 
            className="inline-flexitems-center bg-blue-600-hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
            <Arrow Right className="ml-2-w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
  };
exportdefault FiveGConsultingPage