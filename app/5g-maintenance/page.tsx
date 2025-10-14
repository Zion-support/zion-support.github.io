import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle, Link } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

constFiveGMaintenancePage = () => {
  const services = [
    {
      title: '5GNetwork Maintenance',
      description: 'Ongoingmaintenanceand optimizationof-5G networkinfrastructure.',
    },
    {
      title: 'Security Monitoring',
      description: 'Continuoussecuritymonitoring andthreatdetection for-5G networks.',
    },
    {
      title: 'Team Training',
      description: 'Comprehensivetrainingfor 5G network maintenanceandtroubleshooting.',
        },
];
  return (
    <div className="min-h-screen bg-gray-50">
      <Enhanced SEOtitle="5G Maintenance Services - Zion Tech Group"
        description="Professional 5G maintenance services to keep your network running optimally."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-126">
          <h-1 className="text-4-xlfont-bold text-gray-900 mb-6">
            5G Maintenance Services
          </h-1>
          <p className="text-xltext-gray-600 max-w-3-xl mx-auto">
            Keepyour-5G networkrunning smoothlywithour comprehensivemaintenanceservices.
          </p>
        </div>
        <div className="gridmd:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <divke y={index} className="bg-whiterounded-lg shadow-lg p-8">
              <div className="flexitems-center mb-4">
                <Check Circle className="h-8-w-8 text-blue-600 mr-3" />
                <h-3 className="text-xlfont-semibold text-gray-900">
                  {service.title  },
                </h-3>
              </div>
              <p className="text-gray-600-mb-6">
                {service.description  },
              </p>
              <Linkt o="/contact" 
                className="inline-flexitems-center text-blue-600-hover:text-blue-800 font-medium"
              >
                Learn More
                <Arrow Right className="ml-2-h-4 w-4" />
              </Link>
            </div>
          ))  },
        </div>
        <div className="text-center">
          <Linkt o="/contact"
            className="inline-flexitems-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600-hover:bg-blue-700"
          >
            Get Started Today
            <Arrow Right className="ml-2-h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
  };

exportdefault FiveGMaintenancePage