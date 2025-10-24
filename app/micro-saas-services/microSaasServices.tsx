import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRight     } from 'lucide-react';
export default function microSaasServices() {
return (
        <div>/div>,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>,
    <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center"></div>,<h1 className="text-4 xl font-bold text-white mb-6" /></h1>
MicroSaasServices | Zion Tech Group</h1>/h1>p className="text-lg text-gray-300 mb-8" /></p>
Professional microsaasservices | zion tech group services coming soon.</p>/p>Linkhre f="/contact"
className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hove,"
r: to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
Contact Us</Link>ArrowRightclassNam e="w-5 h-5 ml-2" / />
          </Link>
  )
,}
    </div>/div>/div>
}
=======

interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MicroSaasServices: React.FC = () => {
  const services: MicroSaasService[] = [
    {
      id: '1',
      name: 'AI Analytics',
      description: 'Advanced analytics powered by AI',
      price: 99
    },
    {
      id: '2',
      name: 'Blockchain Integration',
      description: 'Secure blockchain solutions',
      price: 199
    }
  ];

  return (
    <div className="micro-saas-services">
      <h2>Micro SaaS Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">${service.price}/month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicroSaasServices;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
