import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import AutomationSolutionsUltimateShowcase from '../../components/AutomationSolutionsUltimateShowcase';
import AutomationSolutionsUltimatePromotionBanner from '../../components/AutomationSolutionsUltimatePromotionBanner';

const AutomationSolutionsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEO 
        title="Automation Solutions Ultimate Showcase - Zion Tech Group"
        description="Revolutionary automation solutions that transform businesses with 2,500-5,000% ROI and 99.9% accuracy across all industries. Join thousands of companies achieving massive returns."
        keywords="automation solutions, business automation, AI automation, process automation, workflow automation, ROI automation, business transformation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Automation Solutions Ultimate Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary automation solutions that transform businesses with 2,500-5,000% ROI 
                and 99.9% accuracy across all industries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/ai-2025-2030-predictions" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View AI Predictions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <AutomationSolutionsUltimatePromotionBanner />

        {/* Main Showcase */}
        <AutomationSolutionsUltimateShowcase />

        {/* ROI Calculator Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See how much your business could save and earn with our automation solutions
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">2,500%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Minimum ROI</h3>
                  <p className="text-gray-300">
                    Our clients achieve a minimum of 2,500% return on investment within 12 months
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">99.9%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Accuracy Rate</h3>
                  <p className="text-gray-300">
                    Automated processes achieve 99.9% accuracy with zero human intervention
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">10Kx</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Faster Processing</h3>
                  <p className="text-gray-300">
                    Process data and complete tasks 10,000x faster than traditional methods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We follow a proven 4-step process to ensure successful automation implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Analysis</h3>
                <p className="text-gray-300">
                  Comprehensive analysis of your current processes and identification of automation opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design</h3>
                <p className="text-gray-300">
                  Custom automation solution design tailored to your specific business needs and requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">
                  Professional implementation with minimal disruption to your existing operations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                <p className="text-gray-300">
                  Continuous monitoring and optimization to ensure maximum efficiency and ROI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Real results from real companies that have transformed their operations with our automation solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Global Manufacturing Corp</h3>
                <p className="text-gray-300 mb-4">
                  "We achieved 95% reduction in production errors and saved $50M annually within 6 months of implementation."
                </p>
                <div className="text-green-400 font-semibold">$50M Annual Savings</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services Inc</h3>
                <p className="text-gray-300 mb-4">
                  "Our compliance accuracy improved to 99.9% and we avoided $30M in potential penalties."
                </p>
                <div className="text-blue-400 font-semibold">$30M Penalties Avoided</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare Network</h3>
                <p className="text-gray-300 mb-4">
                  "Patient processing became 80% faster, reducing wait times and saving $25M in operational costs."
                </p>
                <div className="text-purple-400 font-semibold">$25M Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of companies achieving 2,500-5,000% ROI with our automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/quantum-computing-breakthroughs"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore Quantum Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default AutomationSolutionsPage;