import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional 5G infrastructure solutions and services" />
        <meta name="keywords" content="5g, infrastructure" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="containermx-auto px-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xlfont-bold text-whitemb-8">5G Infrastructure</h1>
            <p className="text-xltext-gray-300 mb-8">
              Professional 5G infrastructure solutions and services
            </p>
            <div className="gridmd:grid-cols-2 lg:grid-cols-3gap-8mt-12"></div>
              <div className="bg-blue-50border border-blue-200rounded-lgp-6"></div>
                <h3 className="text-lgfont-semibold text-blue-900mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50border border-green-200rounded-lgp-6"></div>
                <h3 className="text-lgfont-semibold text-green-900mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50border border-purple-200rounded-lgp-6"></div>
                <h3 className="text-lgfont-semibold text-purple-900mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
export default FiveGInfrastructurePage;