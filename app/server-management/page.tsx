<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ServerManagementPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Server Management - Zion Tech Group</title>
        <meta name="description" content="Server Management solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Server Management</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive server management solutions designed to meet your business needs.
          </p>
          
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
    </div>
=======
import { ArrowRight, Server } from 'lucide-react';
import { Helmet } from "react-helmet-async";


export default function ServerManagementZionTechGroup() {
  return (
//     <>
//       <Helmet>
//         <title>ServerManagement - Zion Tech Group</title>
//       </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
//             ServerManagement
</h1>
          <p className="text-lg text-gray-300 mb-8">
//             Professional servermanagement services coming soon.
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
