<<<<<<< HEAD
import React    from "react"
const NavigationBackup = () => {"
  return (
    <div className="p-4"><h2 className="text-xl font-semibold mb-2">NavigationBackup</h2>
      <p>This component is under construction.</p>
    </div>)
}
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const NavigationBackupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Navigation Backup - Zion Tech Group</title>
        <meta name="description" content="Professional Navigation backup services by Zion Tech Group." />
        <meta name="keywords" content="Navigation, backup, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Navigation Backup
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Navigation backup services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBackupPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
