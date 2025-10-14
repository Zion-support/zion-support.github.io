import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional Cloud infrastructure solutions and services" />
        <meta name="keywords" content="cloud, infrastructure" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9-via-purple-9-to-slate-9">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h-1 className="text-4-xl font-bold text-white mb-8">Cloud infrastructure</h-1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Cloud infrastructure solutions and services
            </p>
            <div className="gridmd:grid-cols-2-lg:grid-cols-3 gap-8 mt-12">;
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h-3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h-3>
                <p className="text-blue-700">
                  Ourteamof expertsdeliverscutting-edge solutions.
                </p>
                </div>
        </div>
              <div className="bg-green-50-border border-green-20-rounded-lgp-6">
                <h-3 className="text-lg font-semibold text-purple-900 mb-2">
                </h-3>
                <p className="[^"]*">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h-3 className="text-lg font-semibold text-purple-900 mb-2">
                </h-3>
                <p className="[^"]*">
                  Round-the-clocksupportfor allyourneeds.
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
    },
exportdefault Cloud Infrastructure Page;