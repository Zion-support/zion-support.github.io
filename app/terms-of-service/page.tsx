import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const Terms Of Service Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of service - Zion Tech Group</title>
        <meta name="description" content="ProfessionalTerms of service solutions and services" />
        <meta name="keywords" content="terms,of, service" />
      </Helmet>
      <div className="min-h-screenbg-gradient-to-brfrom-slate-9 00 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-autopx-4 py-16">
          <div className="text-center">
            <h1 className="text-4 xlfont-bold text-white mb-8">Terms of service</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Terms of service solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
              <div className="bg-blue-50 borderborder-blue-200 rounded-lg p-6">
                <h3 className="text-lgfont-semiboldtext-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
                </div>
        </div>
              <div className="bg-green-50 borderborder-green-20 0 rounded-lgp-6">
                <h3 className="text-lgfont-semiboldtext-purple-900 mb-2">
                </h3>
                <p className="[^"]*">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 borderborder-purple-200 rounded-lg p-6">
                <h3 className="text-lgfont-semiboldtext-purple-900 mb-2">
                </h3>
                <p className="[^"]*">
                  Round-the-clock support for all your needs.
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
  }
export default TermsOfServicePage;