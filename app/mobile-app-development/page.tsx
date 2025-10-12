import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function MobileappdevelopmentPage() {
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>MobileApp Development - ZionTech Group</title>
        <meta name ="description" content="Professionalmobile appdevelopment servicesby Zion Tech Group. Transformyour businesswith ourexpert solutions." / / />
      </Helmet>
      <div className ="max-w-7 xlmx-autopx-4 sm:px-6 lg:px-8py-16text-center" />
        <h1className ="text-4 xlfont-boldtext-whitemb-6"  >MobileApp Development</h1>
        <pclassName ="text-lg text-gray-300 mb-8">Professionalmobile appdevelopment servicescoming soon.</p>
        <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
          ContactUs
          <Arrow Rightclass Name="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}