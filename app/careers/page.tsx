<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Careers</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive careers solutions designed to meet your business needs.
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


const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<EnhancedSEO
        title="Careers - Zion Tech Group | Join Our Team"
        description="Join Zion Tech Group and be part of the future of technology. Explore exciting career opportunities in AI, cybersecurity, and digital transformation."
        keywords="careers, jobs, technology careers, AI jobs, cybersecurity jobs, software development"
        canonical="https://ziontechgroup.com/careers"
//       />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Join Our Team
</h1>
          <p className="text-xl text-gray-300 mb-8">
//             Be part of the future of technology
</p>
</div>
</div>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
