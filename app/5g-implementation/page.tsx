<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Implementation5GPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G implementation services for seamless network deployment." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">5G Implementation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Complete 5G implementation services for seamless network deployment and optimization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Network Planning</h3>
              <p className="text-gray-300">
                Strategic planning and design for optimal 5G network coverage and performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Infrastructure Setup</h3>
              <p className="text-gray-300">
                Complete infrastructure deployment including base stations and core network components.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Testing & Optimization</h3>
              <p className="text-gray-300">
                Comprehensive testing and optimization to ensure peak network performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


export default function Implementation5GPage() {
  return (
//     <>
//       <Helmet>
//         <title>5G Implementation - Zion Tech Group</title>
//         <meta
          name="description"
          content="Professional 5G implementation services for businesses"
//         />
//       </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
//             5G Implementation
</h1>
          <p className="text-lg text-gray-300 mb-8">
//             Professional 5G implementation services coming soon.
</p>

//           <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
</Link>
</div>
</div>
//     </>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
