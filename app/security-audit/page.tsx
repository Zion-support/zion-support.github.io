import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityAuditPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security audit - Zion Tech Group</title>
        <meta name="description" content="Professional Security audit solutions and services" />
        <meta name="keywords" content="security, audit" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Security audit</h1>
            <p className="text-xl text-gray-300mb-8">
              Professional Security audit solutions and services
            </p>
            <div className="grid md:grid-cols-2lg:grid-cols-3gap-8mt-12"></div>;
              <div className="bg-blue-50 borderborder-blue-200rounded-lgp-6"></div>
                <h3 className="text-lg font-semiboldtext-blue-900mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
                </div>
        </div>
              <div className="bg-green-50border border-green-200rounded-lgp-6"></div>
                <h3 className="text-lg font-semiboldtext-purple-900mb-2">
                </h3>
                <p className="[^"]*">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 borderborder-purple-200rounded-lgp-6"></div>
                <h3 className="text-lg font-semiboldtext-purple-900mb-2">
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
export default SecurityAuditPage;