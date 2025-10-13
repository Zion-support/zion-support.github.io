import { ArrowRight, Cloud, Shield, Database, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudServicesPage() {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive cloud services including infrastructure, migration, and management solutions"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Cloud Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud solutions. 
                From infrastructure setup to migration and management, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Design, deploy, and manage scalable cloud infrastructure solutions tailored to your business needs.
                </p>
                <Link
                  to="/cloud-infrastructure"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Security</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions to protect your cloud infrastructure and data.
                </p>
                <Link
                  to="/cybersecurity-solutions"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
                <p className="text-gray-300 mb-4">
                  Seamless migration of your applications and data to the cloud with minimal downtime.
                </p>
                <Link
                  to="/cloud-migration-advanced"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Optimize your cloud costs and performance with our advanced monitoring and management tools.
                </p>
                <Link
                  to="/cloud-cost-optimization"
                  className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with Cloud?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our cloud experts are ready to help you design, implement, and manage the perfect cloud solution for your business.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
