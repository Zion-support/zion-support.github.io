import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {Building2, Server, Shield, Zap, Users, Globe, ArrowRight} from 'lucide-react';
export default function EnterpriseIT
export {EnterpriseIT}() {
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Enterprise IT
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT infrastructure and services designed for enterprise-scale organizations, 
              ensuring reliability, security, and scalability for your business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIT.js;
