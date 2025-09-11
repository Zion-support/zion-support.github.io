import React from 'react';
import { Cloud, ArrowRight, Shield, Zap, Database, Globe } from 'lucide-react';

const CloudMigration: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Cloud Migration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">
            Seamlessly migrate your infrastructure to the cloud with zero downtime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Assessment & Planning</h3>
            <p className="text-gray-300">
              Comprehensive analysis of your current infrastructure and migration strategy.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <ArrowRight className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lift & Shift</h3>
            <p className="text-gray-300">
              Quick migration of existing applications with minimal modifications.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Shield className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
            <p className="text-gray-300">
              Ensure your cloud infrastructure meets all security and compliance requirements.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
            <p className="text-gray-300">
              Optimize your applications for cloud-native performance and scalability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Database className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Database Migration</h3>
            <p className="text-gray-300">
              Secure and efficient migration of your databases to cloud platforms.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Globe className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Multi-Cloud Strategy</h3>
            <p className="text-gray-300">
              Leverage multiple cloud providers for optimal performance and cost efficiency.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Cloud Journey</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our certified cloud architects will guide you through every step of your migration.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudMigration;