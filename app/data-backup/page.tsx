'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, Shield, BarChart, Brain, Target, Users, Globe } from 'lucide-react';

const DataBackupPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Backup Solutions | Zion Tech Group</title>
        <meta name="description" content="Secure and reliable data backup solutions. Automated backup systems, disaster recovery, and data protection services for business continuity." />
        <meta name="keywords" content="data backup, backup solutions, disaster recovery, data protection, business continuity, cloud backup" />
        <link rel="canonical" href="https://ziontechgroup.com/data-backup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data Backup
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your critical data with comprehensive backup solutions. Automated backups, 
                disaster recovery, and data protection for complete business continuity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Data Backup Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Database className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automated Backups</h3>
                <p className="text-gray-300">
                  Scheduled and automated backup systems that ensure your data is 
                  consistently protected without manual intervention.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Disaster Recovery</h3>
                <p className="text-gray-300">
                  Comprehensive disaster recovery solutions that minimize downtime 
                  and ensure rapid data restoration in case of emergencies.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Analytics</h3>
                <p className="text-gray-300">
                  Advanced backup analytics and monitoring that provide insights 
                  into backup performance and data protection status.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Data Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our data protection experts to learn how our backup solutions can 
              safeguard your critical business data.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataBackupPage;