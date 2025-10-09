import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudMigrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services to help your business transition to the cloud seamlessly." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Migration</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert cloud migration services to help your business transition to the cloud seamlessly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Migration Planning</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive assessment and planning to ensure a smooth cloud migration process.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Infrastructure Assessment</li>
                <li>• Migration Strategy</li>
                <li>• Risk Analysis</li>
                <li>• Timeline Planning</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Data Migration</h3>
              <p className="text-gray-300 mb-4">
                Secure and efficient migration of your data to cloud platforms.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Database Migration</li>
                <li>• File Transfer</li>
                <li>• Data Validation</li>
                <li>• Backup & Recovery</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Application Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration of your applications to cloud environments.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Application Assessment</li>
                <li>• Code Refactoring</li>
                <li>• Testing & Validation</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudMigrationPage;