'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive guides and API documentation
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Quick Start Guide</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get up and running with our AI platform in just 5 minutes.
              </p>
              <Link 
                to="/docs/quick-start"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Start Here
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">API Reference</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete API documentation with examples and code snippets.
              </p>
              <Link 
                to="/docs/api"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                View API Docs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">SDKs & Libraries</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Client libraries for Python, JavaScript, Java, and more.
              </p>
              <Link 
                to="/docs/sdk"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                Browse SDKs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive documentation by category
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <Link 
                      key={docIndex}
                      to={doc.link}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600">{doc.title}</h4>
                          <p className="text-sm text-gray-500">{doc.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular & Recent Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Popular Documentation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Most Popular</h3>
              <div className="space-y-4">
                {popularDocs.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <Link 
                        to={doc.link}
                        className="font-medium text-gray-900 hover:text-blue-600"
                      >
                        {doc.title}
                      </Link>
                      <p className="text-sm text-gray-500">{doc.views} views</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{update.title}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {update.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{update.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Documentation
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get offline access to our complete documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download ePub
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Updated daily • Available in multiple formats
          </p>
        </div>
      </section>

=======
        </section>
      </main>
      <Footer />
>>>>>>> origin/main
    </div>
  );
};
export default DocsPage;
