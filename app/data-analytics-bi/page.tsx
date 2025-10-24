'use client';

<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
    <>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
=======
const DataAnalyticsBiPage: React.FC = () => {
  return(<>)
      <Helmet><title>Data Analytics & BI - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics and business intelligence solutions including data visualization, reporting, and insights for data-driven decision making." />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, reporting, insights, data-driven decisions" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">Data Analytics & Business Intelligence;</h1>
            </h1>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Transform your data into actionable insights with our comprehensive data analytics;</p>
              and business intelligence solutions for data-driven decision making.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8 mb-16">,</div>
            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Data Visualization</h3>
              <p className="text-gray-300mb-4">Interactive dashboards and visualizations to make complex data easily understandable.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Interactive dashboards</li>
                <li>• Real-time charts</li>
                <li>• Custom visualizations</li>
                <li>• Mobile-responsive design</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Predictive Analytics</h3>
              <p className="text-gray-300mb-4">Machine learning models to predict future trends and behaviors.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Forecasting models</li>
                <li>• Trend analysis</li>
                <li>• Risk assessment</li>
                <li>• Scenario planning</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Data Warehousing</h3>
              <p className="text-gray-300mb-4">Centralized data storage and management for efficient analytics.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Data integration</li>
                <li>• ETL processes</li>
                <li>• Data quality</li>
                <li>• Scalable storage</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Reporting Solutions</h3>
              <p className="text-gray-300mb-4">Automated reporting and self-service analytics for all stakeholders.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Automated reports</li>
                <li>• Self-service BI</li>
                <li>• Scheduled delivery</li>
                <li>• Custom formatting</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Performance Metrics</h3>
              <p className="text-gray-300mb-4">KPI tracking and performance monitoring across all business functions.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• KPI dashboards</li>
                <li>• Performance tracking</li>
                <li>• Benchmarking</li>
                <li>• Goal monitoring</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Data Governance</h3>
              <p className="text-gray-300mb-4">Comprehensive data governance and compliance management.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Data lineage</li>
                <li>• Access controls</li>
                <li>• Compliance monitoring</li>
                <li>• Data cataloging</li></ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-rfrom-cyan-500to-blue-600text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">,</button>
              Start Your Analytics Journey;
            </button>
          </div>
        </div>
      </div>
    </>
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5

      <Footer />
    </>
  );
};

export default PagePage;
