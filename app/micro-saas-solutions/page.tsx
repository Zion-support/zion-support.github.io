import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Rocket } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {

return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable micro SaaS solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Scalable micro SaaS solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 gap-8">;
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Rocket className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Development</h3>
              <p className="text-gray-300">
                Fast-track your SaaS product development with our expert team.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Targeted Solutions</h3>
              <p className="text-gray-300">
                Focused solutions for specific business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;
