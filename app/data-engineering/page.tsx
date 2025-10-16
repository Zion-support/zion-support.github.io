import React from "react";
import SEOHead from "../components/SEOHead";

const DataEngineeringPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Data Engineering Services - Zion Tech Group"
        description="Professional data engineering and pipeline development. Build scalable data infrastructure, ETL processes, and real-time data processing systems for your business."
        keywords="data engineering, ETL, data pipelines, data infrastructure, real-time processing, data warehousing, big data"
        canonicalUrl="https://ziontechgroup.com/data-engineering"
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Data Engineering Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional data engineering and pipeline development. Build
              scalable data infrastructure, ETL processes, and real-time data
              processing systems to power your business intelligence and
              analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Engineering Services
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      ETL Pipeline Development
                    </h3>
                    <p className="text-gray-600">
                      Build robust Extract, Transform, Load pipelines for data
                      processing
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Real-Time Processing
                    </h3>
                    <p className="text-gray-600">
                      Implement real-time data streaming and processing
                      solutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Data Warehouse Design
                    </h3>
                    <p className="text-gray-600">
                      Design and implement scalable data warehouses and data
                      lakes
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Big Data Solutions
                    </h3>
                    <p className="text-gray-600">
                      Handle large-scale data processing with distributed
                      computing frameworks
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Data Quality & Governance
                    </h3>
                    <p className="text-gray-600">
                      Implement data quality checks, validation, and governance
                      frameworks
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pricing Plans
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Basic Pipeline
                  </h4>
                  <p className="text-3xl font-bold text-green-600">
                    $4,999
                    <span className="text-lg text-gray-600">/project</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Simple ETL pipeline</li>
                    <li>• Basic data validation</li>
                    <li>• 2 weeks delivery</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-green-500 rounded-lg p-4 bg-green-50">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Advanced Platform
                  </h4>
                  <p className="text-3xl font-bold text-green-600">
                    $14,999
                    <span className="text-lg text-gray-600">/project</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Complex data pipeline</li>
                    <li>• Real-time processing</li>
                    <li>• Data warehouse setup</li>
                    <li>• 6 weeks delivery</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Enterprise Solution
                  </h4>
                  <p className="text-3xl font-bold text-green-600">
                    $49,999
                    <span className="text-lg text-gray-600">/project</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Full data platform</li>
                    <li>• Big data processing</li>
                    <li>• Advanced analytics</li>
                    <li>• 12 weeks delivery</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Build Your Data Infrastructure
            </h2>
            <p className="text-gray-600 mb-6">
              Professional data engineering services for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Data Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataEngineeringPage;
