<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
          </p>
        </div>
<<<<<<< HEAD
        
        <div className="max-w-4xl mx-auto">
          
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">
          This page is under development. Please check back later for updates.
        </p>
      </div>
    
=======

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
          <p className="text-xl text-gray-600 mb-8">
            Advanced micro saas services solutions by Zion Tech Group.
          </p>
        </div>
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro Saas Services - Zion Tech Group</title>
        <meta name="description" content="Micro Saas Services services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="micro-saas-services, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro Saas Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional micro saas services services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced micro saas services solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
        </div>
      </div>
    </div>
  );
    name: 'Starter','
    price: '$29-99/month','
    features: ['Basic AI features', 'Standard support', 'Limited integrations', 'Basic analytics']},'
  professional: {,
    ,
    name: 'Professional','
    price: '$99-299/month','
    features: ['Advanced AI features', 'Priority support', 'Full integrations', 'Advanced analytics', 'API access']},'
  enterprise: {,
    ,
    name: 'Enterprise','
    price: '$299-999/month','
    features: ['Custom AI models', '24/7 support', 'White-label options', 'Custom integrations', 'Dedicated support', 'SLA guarantees']}}'
}
// Contact information;
export const contactInfo = {phone: '+1 302 464 0950','
  email: 'kleber@ziontechgroup.com','
  address: '364 E Main St STE 1008, Middletown, DE 19709','
  website: 'https://ziontechgroup.com','
  timezone: 'EST (Eastern Standard Time)'}'
}
};

export default MicroSaasServicesPage;
      </div>
    </div>
  );
}
