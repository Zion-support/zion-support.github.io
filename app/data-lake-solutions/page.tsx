import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const DataLakeSolutionsPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Data Lake Solutions - Zion Tech Group</title>
        <meta name="description" content="Build scalable data lakes for big data analytics and AI. Store, process, and analyze massive amounts of structured and unstructured data." />
        <meta name="keywords" content="data lake solutions, big data analytics, data storage, data processing, data warehouse, analytics platform" />
        <link rel="canonical" href="https://ziontechgroup.com/data-lake-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Data Lake Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build scalable data lakes for big data analytics and AI. 
              Store, process, and analyze massive amounts of structured and unstructured data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Storage</h3>
              <p className="text-gray-300">
                Store massive amounts of structured and unstructured data in a centralized repository.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">
                Process data in real-time with stream processing and batch analytics capabilities.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Discovery</h3>
              <p className="text-gray-300">
                Discover and catalog data assets with intelligent metadata management.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics Platform</h3>
              <p className="text-gray-300">
                Build advanced analytics and machine learning models on your data lake.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Governance</h3>
              <p className="text-gray-300">
                Implement data governance, security, and compliance policies.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Integration</h3>
              <p className="text-gray-300">
                Integrate with cloud platforms and services for scalable data processing.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Build Your Data Lake?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
=======
      <SEOHead
        title="Data Lake Solutions - Zion Tech Group"
        description="Build scalable data lakes for big data analytics, machine learning, and data warehousing. Store, process, and analyze structured and unstructured data."
        keywords="data lake, big data analytics, data warehousing, data storage, data processing, machine learning data, data architecture"
        canonicalUrl="https://ziontechgroup.com/data-lake-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Data Lake Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build scalable data lakes for big data analytics, machine learning, and data warehousing. Store, process, and analyze structured and unstructured data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Data Lake Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Scalable data storage
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Multi-format data support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time data ingestion
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Data cataloging and governance
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Security and access control
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Analytics Capabilities</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Big data processing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Machine learning pipelines
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Data visualization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Business intelligence
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Predictive analytics
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Data Lake Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💾</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">Storage Layer</h3>
                <p className="text-gray-300">Scalable object storage for all data types.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Processing Layer</h3>
                <p className="text-gray-300">Data processing and transformation engines.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Analytics Layer</h3>
                <p className="text-gray-300">Business intelligence and analytics tools.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=data-lake-solutions"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              Build Data Lake
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default DataLakeSolutionsPage;