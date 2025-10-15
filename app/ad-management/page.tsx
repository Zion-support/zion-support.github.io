<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async""use client';"
export default function Page() {}
  return ()
    <div  className ="min-h-screen bg-white">;"
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta: name ="description" content="Professional page services by Zion Tech Group." />;"
      </Helmet>
      <div  className ="container mx-auto px-4 py-16">;"
        <div  className ="text-center">;"
          <h1  className ="text-4xl font-bold text-gray-900 mb-8">;"
            Page
          </h1>
          <p  className ="text-xl text-gray-600 mb-8">;"
            Professional page solutions tailored to your business needs.
          </p>
          <div  className ="grid md=grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;"
            <div  className ="bg-blue-50 border border-blue-200 rounded-lg p-6">;"
              <h3  className ="text-lg font-semibold text-blue-900 mb-2">;"
                Expert Solutions
              </h3>
              <p  className ="text-blue-700">;"
                Our team of experts delivers cutting-edge page solutions.
              </p>
            </div>
            <div  className ="bg-green-50 border border-green-200 rounded-lg p-6">;"
              <h3  className ="text-lg font-semibold text-green-900 mb-2">;"
                Custom Implementation
              </h3>
              <p  className ="text-green-700">;"
                Tailored page implementations for your specific requirements.
              </p>
            </div>
            <div  className ="bg-purple-50 border border-purple-200 rounded-lg p-6">;"
              <h3  className ="text-lg font-semibold text-purple-900 mb-2">;"
                24/7 Support
              </h3>
              <p  className ="text-purple-700">;"
                Round-the-clock support for all your page needs.
              </p>
            </div>
          </div>
          <div  className ="mt-12">;"
            <button  className ="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;"
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdManagementPage;'";'";"
=======
<<<<<<< HEAD
import React from 'react";";";";
import { Helmet } from 'react-helmet-async""use client";
export default function Page() {
  ;";
};";";
      <Helmet>;";";";
        <title>Page - Zion Tech Group</title>;"
        <meta name="description" content="Professional page services by Zion Tech Group." />;";";";
      </Helmet>;"
      <div className="container mx-auto px-4 py-16">;"
        <div className="text-center">;"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;";";
            Page;";";";
          </h1>;"
          <p className="text-xl text-gray-600 mb-8">;";";
            Professional page solutions tailored to your business needs.;";";";
          </p>;"
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;";";
                Expert Solutions;";";";
              </h3>;"
              <p className="text-blue-700">;";
                Our team of experts delivers cutting-edge page solutions.;";";
              </p>;";";";
            </div>;"
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;"
              <h3 className="text-lg font-semibold text-green-900 mb-2">;";";
                Custom Implementation;";";";
              </h3>;"
              <p className="text-green-700">;";
                Tailored page implementations for your specific requirements.;";";
              </p>;";";";
            </div>;"
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;";";
                24/7 Support;";";";
              </h3>;"
              <p className="text-purple-700">;
                Round-the-clock support for all your page needs.;";
              </p>;";";
            </div>;";";";
          </div>;"
          <div className="mt-12">;"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
=======
<<<<<<< HEAD
import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
'use client;''";
export default function Page() {
=======
import React from 'react';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Ad Management',
      description: 'Comprehensive advertising management solutions for digital marketing'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our marketing specialists'
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  return (
    <>
      <EnhancedSEO title="Ad Management - Zion Tech Group" description="Comprehensive advertising management solutions for digital marketing" />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ad Management Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your digital advertising with our comprehensive ad management platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );}
}''";
=======

import React from 'react';";
import { Helmet } from 'react-helmet-async""use client';";";
export default function Page() {}
  return ()
    <div: className ="min-h-screen bg-white">;";
      <Helmet>;
        <title>Page - Zion Tech Group</title>;
        <meta: name ="description" content="Professional page services by Zion Tech Group." />;";
      </Helmet>;
      <div: className ="container mx-auto px-4 py-16">;";
        <div: className ="text-center">;";
          <h1: className ="text-4xl font-bold text-gray-900 mb-8">;";
            Page;
          </h1>;
          <p: className ="text-xl text-gray-600 mb-8">;";
            Professional page solutions tailored to your business needs.;
          </p>;
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;";
            <div: className ="bg-blue-50 border border-blue-200 rounded-lg p-6">;";
              <h3: className ="text-lg font-semibold text-blue-900 mb-2">;";
                Expert Solutions;
              </h3>;
              <p: className ="text-blue-700">;";
                Our team of experts delivers cutting-edge page solutions.;
              </p>;
            </div>;
            <div: className ="bg-green-50 border border-green-200 rounded-lg p-6">;";
              <h3: className ="text-lg font-semibold text-green-900 mb-2">;";
                Custom Implementation;
              </h3>;
              <p: className ="text-green-700">;";
                Tailored page implementations for your specific requirements.;
              </p>;
            </div>;
            <div: className ="bg-purple-50 border border-purple-200 rounded-lg p-6">;";
              <h3: className ="text-lg font-semibold text-purple-900 mb-2">;";
                24/7 Support;
              </h3>;
              <p: className ="text-purple-700">;";
                Round-the-clock support for all your page needs.;
              </p>;
            </div>;
          </div>;
          <div: className ="mt-12">;";
            <button: className ="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;";
>>>>>>> main
              Get Started Today;
            </button>;
          </div>;
        </div>;
      </div>;";
    </div>;";";
  );";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
const AdManagementPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Ad Management - Zion Tech Group"";"
        description="Professional ad management solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Ad Management</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default AdManagementPage;'";'";";";";
"
=======
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  );
};
<<<<<<< HEAD
;
export default AdManagementPage;'";'";";";
>>>>>>> main
>>>>>>> main
>>>>>>> main
=======

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
